extern Benchmark

var apps = [
	{name: 'imba@1.3.3', path: "imba/index.html", color: '#709CB2', libSize: '16kb'}
	{name: 'chrysalis@1.0.8', path: "chrysalis/dist/index.html", color: '#000000', libSize: '1kb'}
	{name: 'react@16.prod', path: "react/index.html", color: 'rgb(15, 203, 255)', libSize: '36kb'}
	{name: 'vue@2.5.13', path: "vue/index.html", color: '#4fc08d', libSize: '32kb'}
	{name: 'glimmer@0.13.0', path: "glimmer/compiled/index.html", color: '#face8d', libSize: '34.32kb'}
]

for app in apps
	window[app:name.toUpperCase.split('@').shift] = app

# custom iframe that waits for example to load and
# links up a reference to the api
tag AppFrame < iframe
	def setup
		dom:onload = do
			data:api = dom:contentWindow.API
			data:ready = yes

var state = {
	count: 6
	current: null
	fastest: null
	ins: 1
	rem: 1
}

state:reset = do
	for app in apps
		app:api.reset(state:count,state)

state:step = do |times|
	for app in apps
		let i = 0
		while i++ < times
			app:api.step
	return

state:run = do
	state:fastest = null
	var bm = state:bench = Benchmark.Suite.new("benchmark")

	for app,i in apps
		app:api.reset(state:count,state)
		bm.add(app:name, app:api:step)
		app:bm = bm[i]

	var nr = 0
	state:current = apps[nr]

	bm.on 'cycle' do |e|
		state:current = apps[++nr]
		Imba.commit

	bm.on 'complete' do
		state:fastest = bm.filter('fastest')[0]
		state:bench = null
		Imba.commit

	bm.run(async: true, queued: false)
	
tag Stepper < button
	def ontouchstart t
		app:api.startObserver for app in apps
		@interval = setInterval(&,1000 / 60) do state.step(1)
		state.step(1)
	
	def ontouchend t
		clearInterval(@interval)
		app:api.stopObserver for app in apps
		Imba.commit
		
	def ontouchcancel t
		ontouchend(t)
	
tag App
	
	def run
		state:fastest = null
		var bm = state:bench = Benchmark.Suite.new("benchmark")
		var bmapps = []

		for app,i in apps
			app:api.reset(state:count,state)
			unless app:api.checkImplementation
				console.warn app:name,"not reconciling synchronously"
			else
				bm.add(app:name, app:api:step)
				bmapps.push(app)
				app:bm = bm[i]
				

		var nr = 0
		state:current = bmapps[nr]

		bm.on 'cycle' do |e|
			state:current = bmapps[++nr]
			Imba.commit

		bm.on 'complete' do
			state:fastest = bm.filter('fastest')[0]
			state:bench = null
			Imba.commit
			
		bm.run(async: true, queued: false)
		self
	
	def profile times = 100000
		for app in apps
			app:api.profile(times)
		self
	
	def step times
		for app in apps
			app:api.step
			# let i = 0
			# while i++ < times
			#	app:api.step
		self
	
	def reset
		for app in apps
			app:api.reset(state:count,state)
		self
	
Imba.mount APP = <App[state].root ->
	<header#header>
		<input[state:count] type="number">
		<span.flex> "todos"
		<button :tap.reset> "reset"
		<Stepper> "step"
		<button.primary :tap.run disabled=(state:bench)> "Run benchmark"
		# <button :tap.profile(100000)> "Run profile"

	<section.apps> for app in apps
		<div[app].app css:color=app:color>
			<header> String(app:bm or app:name) # ? String(app:bm) : @status
			<AppFrame[app] src="apps/{app:path}" css:minHeight='340px' name=app:name>
			<footer>
				if app:api and app:api:mutations
					<div.muts>
						<span.value> app:api:mutations
						<i> "muts"
				if app:bm and data:fastest
					<div.ops>
						<span.value> Math.round(app:bm:hz)
						<i> "ops/sec"
					if app:bm == data:fastest
						<div.small.compare> <span> "baseline"
					elif app:bm:hz < data:fastest:hz
						<div.small.compare.slower>
							<span.x.s> (data:fastest:hz / app:bm:hz).toFixed(2) + 'x'
							<i> "slower"
				<div.small.size>
					<i> 'size (gzipped)'
					<span.value> app:libSize

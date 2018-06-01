
@extends("layouts.master-projectie")

@section("content")
    <div id="projectie"> </div>
@endsection

@section("scripts")
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/4.13.0/bodymovin.min.js"></script>

    <script>
        let animation = bodymovin.loadAnimation({
            container: document.getElementById('projectie'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'src/projectie-mirrored.json'
        })
    </script>
@endsection


@extends("layouts.master")

@section("middle-content")
    <div class="col-3 left-column">
        <p>Apps</p>
    </div>
    <div class="col-9 right-column">

        <div class="row justify-content-around">
            @foreach($apps as $app)
                <div class="col-5 app-card" style="background-color: white">
                    <img src=""/>
                    <p>{{ $app->naam }}</p>
                </div>
            @endforeach
        </div>
    </div>
@endsection
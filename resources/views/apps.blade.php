@extends("layouts.master")

@section("middle-content")
    <div class="col-3 left-column">
        <p class="active-nav-left-col">Apps</p>
    </div>
    <div class="col-9 right-column">

        <div class="row ">
            @foreach($apps as $app)
                <div class="app-card">
                    <img src="{{ asset($app->imgpath) }}"/>
                    <p>{{ $app->naam }}</p>
                </div>
            @endforeach
        </div>
    </div>
@endsection
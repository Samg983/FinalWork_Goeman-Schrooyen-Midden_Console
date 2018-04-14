@extends("layouts.master")

@section("middle-content")
    @include("partials.muziek-nav")
    <div class="col-9 right-column">
        <div class="row">
            @foreach($radiozenders as $zender)
                <div class="col-12"  style="background-color: white">

                    <p>{{ $zender->naam }}</p>
                </div>
            @endforeach
        </div>
    </div>
@endsection
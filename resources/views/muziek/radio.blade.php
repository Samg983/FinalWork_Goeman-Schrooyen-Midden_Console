@extends("layouts.master")

@section("middle-content")
    <div class="row">
        @include("partials.muziek-nav")
        <div class="col-9 right-column">
            <div class="row">
                @foreach($radiozenders as $zender)
                    <div class="col-12">

                        <p>{{ $zender->naam }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@endsection
@extends("layouts.master")

@section("middle-content")
    <div class="row">
        @include("partials.nav-nav")
        <div class="col-9">
            <div class="row">


                @foreach($instellingen as $instelling)
                    <h5 class="col-6">{{ $instelling->naam }}</h5>
                    <div class="col-6">
                        <label class="switch ">
                            <input type="checkbox" {!! $instelling->isAan ? "checked" : "" !!} name="{{ $instelling->instellingId }}">
                            <span class="slider round"></span>
                        </label>
                    </div>
                @endforeach


            </div>
        </div>


    </div>
@endsection

@section("scripts")

@endsection
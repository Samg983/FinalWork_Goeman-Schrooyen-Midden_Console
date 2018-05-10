@extends("layouts.master")

@section("middle-content")
    <div class="row" >
        @include("partials.nav-nav")
        <div class="col-9">
            <div class="row">

                <h5 class="col-6">Vermijd snelwegen</h5>
                <div class="col-6">
                    <label class="switch ">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <h5 class="col-6">Zuinigste route</h5>
                <div class="col-6">
                    <label class="switch ">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <h5 class="col-6">Vermijd tolwegen</h5>
                <div class="col-6">
                    <label class="switch ">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>

            </div>
        </div>


    </div>
@endsection

@section("scripts")

@endsection
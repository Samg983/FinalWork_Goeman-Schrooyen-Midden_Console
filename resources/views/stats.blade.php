@extends("layouts.master")

@section("middle-content")
    <div class="row">
        <!--<div class="col-3 left-column">
            <p>Verbruik</p>
        </div>-->
        <div class="col-12" style="margin-top: 5%">
            {!! $chart->render() !!}
        </div>

        <div class="col-6" style="margin-top: 5%">
            {!! $chart2->render() !!}
        </div>
        <div class="col-6" style="margin-top: 5%">
            {!! $chart3->render() !!}
        </div>
    </div>
@endsection

@section("scripts")
    <script src="{{ asset('js/chart.js') }}"></script>
@endsection
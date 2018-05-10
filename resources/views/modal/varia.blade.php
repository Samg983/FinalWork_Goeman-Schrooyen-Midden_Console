<div class="modal fade" id="variaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">

            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="row varia-section">
                        <h2 class="col-12">Profielen</h2>
                        <form id="changeProfile" class="col-12" action="{{ route("driver.change") }}" method="post">
                            <div class="form-row">
                                @foreach($bestuurders as $bestuurder)
                                    <div class="form-check form-check-inline col-md-4">
                                        <input class="form-check-input profileInput" type="radio" name="profile" id="profile{{ $bestuurder->bestuurderId }}" title="{{ $bestuurder->bestuurderId }}"
                                               value="{{ $bestuurder->bestuurderId }}" {{ $bestuurder->bestuurderId == $huidigeBestuurder->bestuurderId ? "checked" : ""}}>
                                        <label class="form-check-label" for="inlineRadio1">{{ $bestuurder->naam }}</label>
                                    </div>
                                @endforeach

                            </div>

                            {{ method_field('POST') }}
                            {{ csrf_field() }}

                        </form>
                        <a href="#">Voeg bestuurder toe</a>
                    </div>
                    <div class="row varia-section">


                        <h2 class="col-12">Instellingen</h2>
                        <div class="col-4">eee</div>
                        <div class="col-4">eee</div>
                        <div class="col-4">eee</div>
                        <div class="col-4">eee</div>
                        <div class="col-4">eee</div>
                        <div class="col-4">eee</div>

                    </div>
                    <div class="row varia-section">
                        <h2 class="col-12">Handleiding</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
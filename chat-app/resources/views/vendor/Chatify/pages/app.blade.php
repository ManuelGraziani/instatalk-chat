@include('Chatify::layouts.headLinks')
<div class="messenger">
    {{-- ----------------------Lato elenchi utenti/gruppi---------------------- --}}
    <div class="messenger-listView {{ !!$id ? 'conversation-active' : '' }}">
        {{-- Intestazione e barra di ricerca --}}
        <div class="m-header">
            <nav>
                <a href="#"><i class="fas fa-inbox"></i> <span class="messenger-headTitle">MESSAGGI</span> </a>
                {{-- Pulsanti dell'intestazione --}}
                <nav class="m-header-right">
                    <a href="#"><i class="fas fa-cog settings-btn"></i></a>
                    <a href="#" class="listView-x"><i class="fas fa-times"></i></a>
                </nav>
            </nav>
            {{-- Input di ricerca --}}
            <input type="text" class="messenger-search" placeholder="Ricerca" />
            {{-- Schede --}}
            {{-- <div class="messenger-listView-tabs">
                <a href="#" class="active-tab" data-view="users">
                    <span class="far fa-user"></span> Contatti</a>
            </div> --}}
        </div>
        {{-- Schede e elenchi --}}
        <div class="m-body contacts-container">
           {{-- Elenchi [Utenti/Gruppi] --}}
           {{-- ---------------- [ Scheda Utenti ] ---------------- --}}
           <div class="show messenger-tab users-tab app-scroll" data-view="users">
               {{-- Preferiti --}}
               <div class="favorites-section">
                <p class="messenger-title"><span>Preferiti</span></p>
                <div class="messenger-favorites app-scroll-hidden"></div>
               </div>
               {{-- Messaggi Salvati --}}
               <p class="messenger-title"><span>Spazio Personale</span></p>
               {!! view('Chatify::layouts.listItem', ['get' => 'saved']) !!}
               {{-- Contatti --}}
               <p class="messenger-title"><span>Tutti i Messaggi</span></p>
               <div class="listOfContacts" style="width: 100%;height: calc(100% - 272px);position: relative;"></div>
           </div>
             {{-- ---------------- [ Scheda Ricerca ] ---------------- --}}
           <div class="messenger-tab search-tab app-scroll" data-view="search">
                {{-- Elementi --}}
                <p class="messenger-title"><span>Ricerca</span></p>
                <div class="search-records">
                    <p class="message-hint center-el"><span>Digita per cercare..</span></p>
                </div>
             </div>
        </div>
    </div>

    {{-- ----------------------Lato Messaggistica---------------------- --}}
    <div class="messenger-messagingView">
        {{-- Titolo dell'intestazione [nome della conversazione] e pulsanti --}}
        <div class="m-header m-header-messaging">
            <nav class="chatify-d-flex chatify-justify-content-between chatify-align-items-center">
                {{-- Pulsante indietro, avatar e nome utente --}}
                <div class="chatify-d-flex chatify-justify-content-between chatify-align-items-center">
                    <a href="#" class="show-listView"><i class="fas fa-arrow-left"></i></a>
                    <div class="avatar av-s header-avatar" style="margin: 0px 10px; margin-top: -5px; margin-bottom: -5px;">
                    </div>
                    <a href="#" class="user-name">{{ config('chatify.name') }}</a>
                </div>
                {{-- Pulsanti dell'intestazione --}}
                <nav class="m-header-right">
                    <a href="#" class="add-to-favorite"><i class="fas fa-star"></i></a>
                    <a href="/"><i class="fas fa-home"></i></a>
                    <a href="#" class="show-infoSide"><i class="fas fa-info-circle"></i></a>
                </nav>
            </nav>
            {{-- Connessione Internet --}}
            <div class="internet-connection">
                <span class="ic-connected">Connesso</span>
                <span class="ic-connecting">Connessione in corso...</span>
                <span class="ic-noInternet">Nessun accesso a Internet</span>
            </div>
        </div>

        {{-- Area di messaggistica --}}
        <div class="m-body messages-container app-scroll">
            <div class="messages">
                <p class="message-hint center-el"><span>Seleziona una chat per iniziare a inviare messaggi</span></p>
            </div>
            {{-- Indicatore di digitazione --}}
            <div class="typing-indicator">
                <div class="message-card typing">
                    <div class="message">
                        <span class="typing-dots">
                            <span class="dot dot-1"></span>
                            <span class="dot dot-2"></span>
                            <span class="dot dot-3"></span>
                        </span>
                    </div>
                </div>
            </div>

        </div>
        {{-- Modulo di invio messaggio --}}
        @include('Chatify::layouts.sendForm')
    </div>
    {{-- ----------------------Lato Informazioni ---------------------- --}}
    <div class="messenger-infoView app-scroll">
        {{-- Azioni di navigazione --}}
        <nav>
            <p>Dettagli Utente</p>
            <a href="#"><i class="fas fa-times"></i></a>
        </nav>
        {!! view('Chatify::layouts.info')->render() !!}
    </div>
</div>

@include('Chatify::layouts.modals')
@include('Chatify::layouts.footerLinks')

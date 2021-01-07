@extends('accountmanager::layouts.master')

@section('NoiDung')
<div class="main">
  <div class="loading">Carousel is loading...</div>
  <div class="container">
    <div class="synch-carousels">
      <div class="left child">
        <div class="gallery">
          
        </div>
      </div>
      <div class="right child">
        <div class="gallery2">
          
        </div>
        <div class="nav-arrows">
          <button class="arrow-left">
            <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-caret-left-fill" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </button>
          <button class="arrow-right">
            <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection

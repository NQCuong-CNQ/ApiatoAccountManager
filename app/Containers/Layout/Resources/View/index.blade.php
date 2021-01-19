@extends('layout::master')
@section('content')
    @foreach($elements as $element)
        {!! $element !!}
    @endforeach
@endsection
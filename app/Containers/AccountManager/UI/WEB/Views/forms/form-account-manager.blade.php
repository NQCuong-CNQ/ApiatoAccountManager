{!! Form::open([
    'method'    => $method, 
    'url'       => $url, 
    'id'		=> $id,
]) !!}
<fieldset @if($disabled) disabled="disabled" @endif>
	@if(!$isNew)
	<div class="d-flex mt-3">
		<div class="label-form-container">
			<p>{{trans("accountmanager::account-manager.labels.id")}}</p>
		</div>
		<div class="input-form-container">
			{!!  Form::text(
			'id',  
			$accountManager['id'], 
			[
				'disabled',
				'id'    => 'account_manager_id',
			]) 
		!!}
		</div>
	</div>
	@endif
	<div class="d-flex mt-3">
		<div class="label-form-container">
			<p>{{trans("accountmanager::account-manager.labels.company_name")}}</p>
		</div>
		<div class="input-form-container">
		{!!  Form::text(
			'company_name',  
			$accountManager['company_name'], 
			[
				'id'    => 'company_name',
				'placeholder' => trans("accountmanager::account-manager.placeholders.company_name"),
				'data-toggle' => 'tooltip',
				'title' => trans("accountmanager::account-manager.validations.company_name.required"),
			]) 
		!!}
		</div>
	</div>
	<div class="d-flex mt-3">
		<div class="label-form-container">
			<p>{{trans("accountmanager::account-manager.labels.domain_name")}}</p>
		</div>
		<div class="input-form-container">
		{!!  Form::text(
			'domain_name',  
			$accountManager['domain_name'], 
			[
				'id'    => 'domain_name',
				'placeholder' => trans("accountmanager::account-manager.placeholders.domain_name"),
				'data-toggle' => 'tooltip',
				'title' => trans("accountmanager::account-manager.validations.domain_name.required"),
			]
			) !!}
			<p>{{trans("accountmanager::account-manager.forms.instruc.domain_name")}}</p>
		</div>
	</div>
	<div class="d-flex mt-3">
		<div class="label-form-container">
			<p>{{trans("accountmanager::account-manager.labels.base_url")}}</p>
		</div>
		<div class="input-form-container">
		{!!  Form::text(
			'base_url',  
			$accountManager['base_url'], 
			[
				'id'    => 'base_url',
				'placeholder' => trans("accountmanager::account-manager.placeholders.base_url"),
				'data-toggle' => 'tooltip',
				'title' => trans("accountmanager::account-manager.validations.base_url.required"),
			]
			) !!} 
			<p>{{trans("accountmanager::account-manager.forms.instruc.base_url")}}</p>
		</div>
	</div>
	<div class="d-flex mt-3">
		<div class="label-form-container">
			<p>{{trans("accountmanager::account-manager.labels.app_code")}}</p>
		</div>
		<div class="input-form-container">
		{!!  Form::text(
			'app_code',  
			$accountManager['app_code'], 
			[
				'id'    => 'app_code',
				'placeholder' => trans("accountmanager::account-manager.placeholders.app_code"),
			]
			) !!} 
			<p>{{trans("accountmanager::account-manager.forms.instruc.app_code")}}</p>
		</div>
	</div>
	<div class="d-flex mt-3">
		<div class="label-form-container">
			<p>{{trans("accountmanager::account-manager.labels.app_name")}}</p>
		</div>
		<div class="input-form-container">
		{!!  Form::text(
			'app_name',  
			$accountManager['app_name'], 
			[
				'id'    => 'app_name',
				'placeholder' => trans("accountmanager::account-manager.placeholders.app_name"),
			]
			) !!} 
		</div>
	</div>
	<div class="d-flex mt-3">
		<div class="label-form-container">
			<p>{{trans("accountmanager::account-manager.labels.app_brand")}}</p>
		</div>
		<div class="input-radio-form-container">
			<div>
				{{ Form::radio('app_brand', '1', true, ['id'=>'app_brand_pmv']) }}
				{{ Form::label('app_brand_pmv', 'Phần mềm vé') }}
			</div>
			<div>
				{{ Form::radio('app_brand', '2', false, ['id'=>'app_brand_wpmv']) }}
				{{ Form::label('app_brand_wpmv', 'Website phần mềm vé') }}
			</div>
			<div>
				{{ Form::radio('app_brand', '3', false, ['id'=>'app_brand_pmh']) }}
				{{ Form::label('app_brand_pmh', 'Phần mềm hàng') }}
			</div>
			<div>
				{{ Form::radio('app_brand', '4', false, ['id'=>'app_brand_tpmh']) }}
				{{ Form::label('app_brand_tpmh', 'Tracking phần mềm hàng') }}
			</div>
			<div>
				{{ Form::radio('app_brand', '5', false, ['id'=>'app_brand_ns']) }}
				{{ Form::label('app_brand_ns', 'Nhân sự') }}
			</div>
			<div>
				{{ Form::radio('app_brand', '6', false, ['id'=>'app_brand_m']) }}
				{{ Form::label('app_brand_m', 'Manual (tự cấu hình)') }}
			</div>
		</div>
	</div>
	<div class="d-flex mt-3">
		<div class="label-form-container">
			<p>{{trans("accountmanager::account-manager.labels.site_name")}}</p>
		</div>
		<div class="input-form-container">
			{!!  Form::text(
				'site_name',  
				$accountManager['site_name'], 
				[
					'id'    => 'site_name',
					'placeholder' => trans("accountmanager::account-manager.placeholders.site_name"),
				]
				) !!} 
				<p>{{trans("accountmanager::account-manager.forms.instruc.site_name")}}</p>
			</div>
		</div>
</fieldset>

@php
  JavaScript::put([
    // App Brand
    "APP_BRAND" => $accountManager->app_brand,
  ]);
@endphp
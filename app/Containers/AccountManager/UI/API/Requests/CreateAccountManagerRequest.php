<?php

namespace App\Containers\AccountManager\UI\API\Requests;

use App\Ship\Parents\Requests\Request;

/**
 * Class CreateAccountManagerRequest.
 */
class CreateAccountManagerRequest extends Request
{

    /**
     * The assigned Transporter for this Request
     *
     * @var string
     */
    protected $transporter = \App\Containers\AccountManager\Data\Transporters\CreateAccountManagerTransporter::class;

    /**
     * Define which Roles and/or Permissions has access to this request.
     *
     * @var  array
     */
    protected $access = [
        'permissions' => '',
        'roles'       => '',
    ];

    /**
     * Id's that needs decoding before applying the validation rules.
     *
     * @var  array
     */
    protected $decode = [
        // 'id',
    ];

    /**
     * Defining the URL parameters (e.g, `/user/{id}`) allows applying
     * validation rules on them and allows accessing them like request data.
     *
     * @var  array
     */
    protected $urlParameters = [
        // 'id',
    ];

    /**
     * @return  array
     */
    public function rules()
    {
        return [
            // company_name : Tên công ty
            'company_name' => 'required',
            // domain_name : Tên domain
            'domain_name' => 'required',
            // base_url : Địa chỉ url
            'base_url' => 'required',
        ];
    }

    /**
     * Định nghĩa các thông báo lỗi của Request
     * @return  array
     */
    public function messages()
    {
        return [
            // Tên công ty
            'company_name.required'   => trans("accountmanager::account-manager.validations.company_name.required"),
            // Tên domain
            'domain_name.required'     => trans("accountmanager::account-manager.validations.domain_name.required"),
            // Địa chỉ url
            'base_url.required'   => trans("accountmanager::account-manager.validations.base_url.required"),
        ];
    }

    /**
     * @return  bool
     */
    public function authorize()
    {
        return $this->check([
            'hasAccess',
        ]);
    }
}

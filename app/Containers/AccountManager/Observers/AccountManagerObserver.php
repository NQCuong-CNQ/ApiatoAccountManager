<?php

namespace App\Containers\AccountManager\Observers;

use App\Containers\AccountManager\Models\AccountManager;

/** 
 * @todo Observer Các sự kiện thêm xoá sửa AccountManager
 * @Usage(use case): 
 * @Input:
 *  - thông tin AccountManager: App\Containers\AccountManager\Models\AccountManager
 * @Output:
 * @Flow: (luồng xử lý,thuật toán)
 * @author Cuong
 * @since 18-01-2021
*/
class AccountManagerObserver
{
    /**
     * Sự kiện thêm mới AccountManager
     * @param AccountManager $accountManager
     * @return void
     */
    public function creating(AccountManager $accountManager)
    {
    }

    /**
     * Sự kiện cập nhật AccountManager
     * @param AccountManager $accountManager
     * @return void
     */
    public function updating(AccountManager $accountManager)
    {
    }

    /**
     * Sự kiện xoá AccountManager
     * @param AccountManager $accountManager
     * @return void
     */
    public function deleting(AccountManager $accountManager)
    {
    }

    /**
     * Handle the AccountManager "created" event.
     *
     * @param AccountManager $accountManager
     * @return void
     */
    public function created(AccountManager $accountManager)
    {
        //
    }

    /**
     * Handle the AccountManager "updated" event.
     *
     * @param AccountManager $accountManager
     * @return void
     */
    public function updated(AccountManager $accountManager)
    {
        //
    }

    /**
     * Handle the AccountManager "deleted" event.
     *
     * @param AccountManager $accountManager
     * @return void
     */
    public function deleted(AccountManager $accountManager)
    {
        //
    }

    /**
     * Handle the AccountManager "restored" event.
     *
     * @param AccountManager $accountManager
     * @return void
     */
    public function restored(AccountManager $accountManager)
    {
        //
    }

    /**
     * Handle the AccountManager "force deleted" event.
     *
     * @param AccountManager $accountManager
     * @return void
     */
    public function forceDeleted(AccountManager $accountManager)
    {
        //
    }
}
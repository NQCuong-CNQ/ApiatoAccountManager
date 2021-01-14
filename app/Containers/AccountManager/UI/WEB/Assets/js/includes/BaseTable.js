import BaseForm from './BaseForm';

class BaseTable extends BaseForm {

    /**
     * @todo: Hàm lấy danh sách cột trong table
     * @purpose: 
     * - mục đích: khai báo danh sách cột của data table
     * @author: Croco
     * @since: 05-08-2020
     * @return array object 
     * - data: tên field
    */
    getColumns() {

        return [
        ];
    }

    /**
     * @todo: Hàm khai báo, render column trong datatable
     * @purpose: 
     * - mục đích: khai báo defs cho datatable
     *  để render column
     * @author: Croco
     * @since: 05-08-2020
     * @return array 
    */
    getColumnDefs() {

        return [
        ];
    }

    /**
     * @todo: Hàm hỗ trợ khai báo translate cho data table
     * @purpose: 
     * - mục đích: translate các label hiển thị trên table
     * @author: Croco
     * @since: 05-08-2020
     * @return object
     * - loadingRecords: label khi loading 1 dòng
     * - processing: khi tải danh sách,
     * @throws 
    */
    getTableLanguage() {

        return {
        };
    }

    /**
     * @todo: Hàm hỗ trợ trả về cấu hình tương ứng với field thì query tìm theo like hay =
     * @purpose: 
     * - mục đích:
     *      - tuỳ từng field có loại query khác nhau
     *          VD: loại thì query =
     *          từ khoá thì query like
     *          số thì query >=,...
     * @author: Croco
     * @since: 05-08-2020
     * @return Object
     *  [tên field] => operation 
    */
    getSearchableFields() {

        return {};
    }

    /**
     * @todo: Hàm hỗ trợ format parameters gọi gọi lên api
     * @purpose: 
     * - mục đích:
     *      - từ các filter theo từng cột
     *      tạo parameter để gọi lên api lấy dữ liệu
     * @author: Croco
     * @since: 05-08-2020
     * @param Object
     * - columns: array danh sách column trong table
     * - draw: cờ của datatable
     * - length: số phần tử trên trang
     * - start: offset của trang
     * - search: Object từ khoá
     *      - value: từ khoá
     * @param Object các cấu hình của datatable
     * @return Object
    */
    processParameters(data = {}, settings = {}) {

        data = data || {};
        // cờ của datatable
        let draw = data.draw;
        // offset của trang
        let start = data.start || 0;
        let limit = data.length || 10;
        start = start * 1;
        limit = limit * 1;

        // thuật toán phân trang
        let page = Math.ceil(start / limit) + 1;
        // từ khoá tìm kiếm
        let search = data.search || {};
        search = search.value || undefined;

        // danh sách cột
        let columns = data.columns || [];

        // lấy khai báo cấu hình loại query theo tên field: query like hay =
        let searchableFields = this.getSearchableFields() || {};
        // danh sách bộ lọc
        // array Object
        //      - field: tên field
        //      - operation: = | like | !=,...
        //      - value: giá trị cần tìm
        //      - relation: khoá ngoại
        let filters = [];

        // duyệt qua danh sách cột để tạo bộ filter với từng cột tương ứng
        columns.forEach((column) => {

            column = column || {};
            // cờ xác định cột có hỗ trợ search hay không
            let searchable = column.searchable;
            let keyword = column.search || {};
            // từ khoá lọc
            keyword = keyword.value || "";
            let field = column.data;

            if (typeof keyword === "string") {

                keyword = keyword.trim();
            }
            // nếu cột không hỗ trợ lọc hoặc không nhập từ khoá thì không lọc
            if (!searchable || !keyword || !field) {

                return;
            }
            // loại query theo = hay like
            let operation = searchableFields[field] || "=";
            let relation = undefined;
            if (field.indexOf(".") !== -1) {

                relation = field.split(".");
                field = relation.pop();
                relation = field.join(".");
            }

            // push vào bộ lọc
            filters.push({
                field,
                operation,
                value: keyword,
                relation
            });
        });

        let parameters = {
            page,
            limit,
            draw,
            search
        };
        if (filters.length > 0) {

            parameters["filters"] = [{
                condition: "and",
                filters
            }];
        }

        parameters = ParametersCriteriaFormater.convertFilterCriteriaToParameters(parameters);

        return parameters;
    }

    /**
     * @todo: Hàm xử lý response từ server về cho datatable
     * @purpose: 
     * - mục đích:
     *      sau khi gọi request lên server lấy dữ liệu
     *      có response về rồi thì gọi qua đây để format dữ liệu cho datatable
     * @author: Croco
     * @since: 05-08-2020
     * @param Object response
     * @return Object
    */
    processResults(response) {}

    /**
     * @todo: Hàm xử lý gọi api lên server
     * @purpose: 
     * - mục đích từ param table sẽ gọi qua đây để gọi request lên server để lấy dữ liệu
     * @author: Croco
     * @since: 05-08-2020
     * @param Object parameters
     * @param function callback success
     * @param function callback error
    */
    requestTransport(param, success, failure) {}



    /**
     * @todo: datatable callback sau khi hiển thị header
     * @author: Croco
     * @since: 06-08-2020
    */
    headerCallback(thead, data, start, end, display) {}
    /**
     * @todo: datatable callback sau khi hiển thị footer
     * @author: Croco
     * @since: 06-08-2020
    */
    footerCallback(tfoot, data, start, end, display ) {}
    /**
     * @todo: datatable callback sau khi hiển thị thông tin table (label tổng số)
     * @author: Croco
     * @since: 06-08-2020
    */
    infoCallback(settings, start, end, max, total, pre) {

        return pre;
    }
    /**
     * @todo: datatable callback sau khi render 1 trang
     * @author: Croco
     * @since: 06-08-2020
    */
    drawCallback(settings) {}

    /**
     * @todo: datatable callback sau khi render 1 dòng
     * @author: Croco
     * @since: 06-08-2020
    */
    rowCallback(row, data, displayNum, displayIndex, dataIndex) {}

    /**
     * @todo: datatable callback sau init xong
     * @author: Croco
     * @since: 06-08-2020
    */
    initComplete(settings, json) {}

    /**
     * @todo: datatable callback format số
     * @author: Croco
     * @since: 06-08-2020
    */
    formatNumber(toFormat) {

        return helper.number.formatNumber(toFormat);
    }
    /**
     * @todo: datatable callback sau tạo xong dòng
     * @author: Croco
     * @since: 06-08-2020
    */
    createdRow(row, data, dataIndex, cells) {}
    /**
     * @todo: datatable callback trạng thái đã load dữ liệu
     * @author: Croco
     * @since: 06-08-2020
    */
    stateLoadCallback(settings, callback) {}
    /**
     * @todo: datatable callback trạng thái đã xử lý param
     * @author: Croco
     * @since: 06-08-2020
    */
    stateLoadParams(settings, data) { }
    /**
     * @todo: datatable callback trạng thái đã load dữ liệu
     * @author: Croco
     * @since: 06-08-2020
    */
    stateLoaded(settings, data) {}
    /**
     * @todo: datatable callback trạng thái đã lưu dữ liệu
     * @author: Croco
     * @since: 06-08-2020
    */
    stateSaveCallback(settings, data) {}
    /**
     * @todo: datatable callback trạng thái đã lưu param
     * @author: Croco
     * @since: 06-08-2020
    */
    stateSaveParams(settings, data) {}

    /**
     * @todo: Hàm khởi tạo datatable
     * @purpose: 
     * - khởi tạo datatable
     *      tự động gọi trong Abstract BaseForm
     * @author: Croco
     * @since: 05-08-2020
    */
    bootDataTable() {

        let $this = $(this);
        let datatable = $this.DataTable({
            ordering: false,
            orderCellsTop: true,
            fixedHeader: true,
            processing: true,
            responsive: true,
            serverSide: true,
            language: this.getTableLanguage(),
            columns: this.getColumns(),
            columnDefs: this.getColumnDefs(),
            "dom"          : [
                "<'row col-sm-12 p-0 justify-content-between'<'align-items-center d-flex border-top border-right border-left p-1 bg-light'i><''f>>",
                "<'row col-sm-12 p-0'<'col-sm-12'tr>>",
                "<'row col-sm-12 p-0 mt-1'<'col-sm-12 col-md-5'l><'col-sm-12 col-md-7'p>>",
            ].join(''),
            ajax: (data, callback, settings) => {

                data = data || {};
                this._requestRaw = data.raw;
                let parameters = this.processParameters(data, settings);
                this.requestTransport(
                    parameters,
                    (response) => {

                        if (data.raw != this._requestRaw) {

                            return;
                        }

                        let results = this.processResults(response);
                        callback(results);
                    },
                    (error) => {

                        if (data.raw != this._requestRaw) {

                            return;
                        }

                        callback({
                            data: []
                        });
                    }
                );
            },
            formatNumber: this.formatNumber.bind(this),
            headerCallback: this.headerCallback.bind(this),
            footerCallback: this.footerCallback.bind(this),
            infoCallback: this.infoCallback.bind(this),
            createdRow: this.createdRow.bind(this),
            initComplete: this.initComplete.bind(this),
            rowCallback: this.rowCallback.bind(this),
            drawCallback: this.drawCallback.bind(this),
            stateLoadCallback: this.stateLoadCallback.bind(this),
            stateLoadParams: this.stateLoadParams.bind(this),
            stateLoaded: this.stateLoaded.bind(this),
            stateSaveParams: this.stateSaveParams.bind(this)
        });

        $this.data("datatable", datatable);

        return this;
    }
}

export default BaseTable;
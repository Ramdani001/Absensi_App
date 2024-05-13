
    const pb = new PocketBase('http://127.0.0.1:8090');

    $( document ).ready(async function() {
        var get = await getData();
        var dataGet = JSON.parse(localStorage.getItem('Token'));

        var data1 = [];

        get.forEach(function (e) {

            var item = {
                "name": `
                    <td>
                        <div class="d-flex px-2">
                          <div>
                            <img src="assets/images/defaultProfile.jpeg" class="avatar avatar-sm rounded-circle me-2" alt="spotify" style="object-fit: cover;">
                          </div>
                          <div class="my-auto">
                            <h6 class="mb-0 text-sm">`+e.name+`</h6>
                          </div>
                        </div>
                      </td>
                `,
                "email": e.email,
                "username": e.username,
                "absen": `
                      <td >
                        <div class="align-middle text-center" id"buton"">
                          <button class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#modalDetail">
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalEdit">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </button>
                          <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalHapus">
                            <i class="fa-solid fa-trash-can"></i>
                          </button>
                        </div>
                    </td>
                `
            };

            data1.push(item);
        });

      console.log(get);

        new DataTable('#tblKaryawan', {
            data: data1,
            columns: [
                { data: 'name'},
                { data: 'email'},
                { data: 'username'},
                { data: 'absen'}
            ],
            info: false,
            ordering: false,
            paging: false
        });
    });

    async function getData(){
        const resultList = await pb.collection('users').getFullList({});

        return resultList;
    }

    // Simpan Data
    function saveData(){

        // name
        // usernameAdd
        // emailAdd
        // PassworAdd
        // PasswordConfirm  
        console.log("testing save data");
    }
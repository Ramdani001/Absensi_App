
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
                          <button id="btnDetail" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDetail" onclick="getDetail('`+e.id+`')">
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalEdit" onclick="editFunct('`+e.id+`')">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </button>
                          <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalHapus" onclick="delFunct('`+e.id+`')">
                            <i class="fa-solid fa-trash-can"></i>
                          </button>
                        </div>
                    </td>
                `
            };

            data1.push(item);
        });
 
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

        // Get data dropdown UUID
 
        var drop = await dropFunct();
        var myParent = document.getElementById('card_id');
        //Create and append select list
        var selectList = document.createElement("select");
        selectList.id = "uid_card";
        selectList.name = "uid_card";
        myParent.appendChild(selectList);

        drop.forEach(function (e){
          // console.log(e.uid); 
          var option = document.createElement("option");
          option.value = e.uid;
          option.text = e.uid;
          selectList.appendChild(option);
        });

        // console.log(drop);

        // Get data dropdown UUID

    });

    async function dropFunct(){
      const recordDrop = await pb.collection('master_card').getFullList({});

      return recordDrop;
    }

    async function getData(){
        const resultList = await pb.collection('users').getFullList({});

        return resultList;
    }

    // Simpan Data
    async function saveData(){

        var name = $('#name');
        var usernameAdd = $('#usernameAdd');
        var emailAdd = $('#emailAdd');
        var passwordAdd = $('#passwordAdd');
        var passwordConfirm = $('#passwordConfirm');
        var uid_card = $('#uid_card');
        console.log(uid_card);

        var lengPass = passwordAdd.val().length;
        var lengPassConf = passwordConfirm.val().length;

        console.log(lengPassConf);

        if(lengPass && lengPassConf < 8){
          alert('Password Minimal 8 Karakter 0-9/a-z')
        }else{

          if(passwordAdd.val() == passwordConfirm.val()){
            console.log("Password Sama");
  
            passwordAdd.removeClass('border border-danger text-danger');
            passwordConfirm.removeClass('border border-danger text-danger');
  
            $('.notMatch').addClass('d-none');
  
            // Create Data
            const data = {
              "username": usernameAdd.val(),
              "email": emailAdd.val(),
              "emailVisibility": true,
              "password": passwordAdd.val(),
              "passwordConfirm": passwordConfirm.val(),
              "name": name.val(),
              "uid": uid_card,
              "divisi": "temp",
              "jabatan": "temp",
              "level": "temp"
          };
  
            const record = await pb.collection('users').create(data);
  
            if(record){
              alert('Data Berhasil tersimpan');
  
              $('#name').val('');
              $('#usernameAdd').val('');
              $('#emailAdd').val('');
              $('#passwordAdd').val('');
              $('#passwordConfirm').val('');
              
              window.location.reload();
  
            }else{
              alert('Data Gagal Tersimpan');
              $('#name').focus();
            }
  
          // Create Data
  
          }else{
  
            passwordAdd.addClass('border border-danger text-danger');
            passwordConfirm.addClass('border border-danger text-danger');
  
            $('.notMatch').removeClass('d-none');
  
            console.log("Password Tidak Sama");
          }

        }
    }

    function addCard(){
      $('#uuid').toggleClass('d-none');
    }

    async function getDetail($id){
      const record = await pb.collection('users').getOne($id, {});
      
      if(record){
        console.log(record);
        $('#det_idKar').val(record.uuid);
        $('#det_name').val(record.name);
        $('#det_divisi').val(record.divisi);
        $('#det_jabatan').val(record.jabatan);
        $('#det_tglmasuk').val(record.tanggal_masuk);
      }else{
        console.log('Data Tidak Ditemukan');
      }

    }

    function delFunct($id){

      $('#modalHapus').modal('show');

      $('#btnHapus').click( async () => {
        console.log("Button Hapus di click");
        const record = await pb.collection('users').delete($id);

        if(record){
          alert('Data Berhasil Terhapus');
          window.location.reload();
        }else{
          window.location.reload();
        }

      });
    }

    // Edit Function

    async function editFunct($id){
      const record = await pb.collection('users').getOne($id, {});
      
      if(record){
        console.log(record);
        $('#edt_kar').val(record.uuid);
        $('#edt_name').val(record.name);
        $('#edt_username').val(record.username);
        $('#edt_email').val(record.email);
        $('#edt_divisi').val(record.divisi);
        $('#edt_jabatan').val(record.jabatan);
        $('#edt_tglmasuk').val(record.tanggal_masuk);
      }else{
        alert('Data Tidak Ditemukan');
      }

      // button update

      $('#btnUpdate').click( async () => {
        var username = $('#edt_username').val();
        var name = $('#edt_name').val();
        var uuid = $('#edt_kar').val();
        var divisi = $('#edt_divisi').val();
        var jabatan = $('#edt_jabatan').val();
        var tgl_masuk = $('#edt_tglmasuk').val();

        const data = {
            "username": username,
            "emailVisibility": true,
            "name": name,
            "uuid": uuid,
            "divisi": divisi,
            "jabatan": jabatan,
            "tanggal_masuk": tgl_masuk
        };
        
        const response = await pb.collection('users').update($id, data);
      
        if(response){
          alert('Data Berhasil Terupdate');
          window.location.reload();
        }else{
          alert('Data Gagal Terupdate');
          $('#edt_kar').focus();
        }
      });
      // button update
      
    }

    // Edit Function
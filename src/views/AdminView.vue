<template>
    <section class="inner-admin">
        <button  type="button" class="btn" data-bs-toggle="modal"
            data-bs-target="#adminAddProduct">Add New Product</button>
            <div class="admin-page-table">
                <table class="table table-responsive table-bordered">
                    <thead class="table-group-divider">
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="table-products">
                        <tr v-for="product in $store.state.products" :key="product.prodID">
                        <td>{{ product.prodID }}</td>
                        <td>{{ product.prodName }}</td>
                        <td><img :src="product.prodUrl" alt="Product Image" class="img-fluid" width="auto" height="auto" /></td>
                        <td>{{ product.Catergory }}</td>
                        <td>{{ product.prodDes }}</td>
                        <td>{{ product.amount }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>
                            <edit-product :product="product"/>
                            <button @click="deleteProductFx()" class="btn btn-outline-danger">
                            Delete
                            </button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button  type="button" class="btn" data-bs-toggle="modal"
            data-bs-target="#adminAddUser">Add New User</button>
            <div class="user-page-table">
                <table class="table table-responsive table-bordered">
                    <thead class="table-group-divider">
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="table-products">
                        <tr v-for="user in $store.state.users" :key="user.userID">
                        <td>{{ user.userID }}</td>
                        <td>{{ user.firstName }}</td> 
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.Gender }}</td> 
                        <td>{{ user.userRole }}</td>
                        <td>{{ user.emailAdd }}</td> 
                            <edit-user :user="user"/>
                            <button @click="deleteUser()" class="btn btn-outline-danger">
                            Delete
                            </button>
                        
                        </tr>
                    </tbody>
                </table>
            </div>

        <!-- Add New Product Modal -->
        <div class="modal fade" id="adminAddProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="addProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addProductLabel">Add a New Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="container">
                                <!-- <input class="form-control m-2" type="text" placeholder="Enter product ID"
                                    v-model="prodID" required> -->
                                <input class="form-control m-2" type="text" placeholder="Enter product name" v-model="newProduct.prodName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter product quatity" v-model="newProduct.quantity" required>
                                <input class="form-control m-2" placeholder="Enter product amount" v-model="newProduct.amount" required>
                                 <input class="form-control m-2" type="text" placeholder="Enter product category" v-model="newProduct.Catergory" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product image URL" v-model="newProduct.prodUrl">
                                <input class="form-control m-2" type="text" placeholder="Enter product description" v-model="newProduct.prodDes" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="submit" class="btn btn-outline-success" @click="addProduct()">Save Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add New User Modal -->
        <div class="modal fade" id="adminAddUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="addUserLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addUserLabel">Add a New User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="updateUserFx()">
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter product ID"
                                    v-model="newUser.usersID" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Name" v-model="newUser.firstName"
                                    required>
                                <input class="form-control m-2" type="text" placeholder="Enter Surname"
                                    v-model="newUser.lastName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter Age" v-model="userAge"
                                    required>
                                <input class="form-control m-2" placeholder="Enter Gender" v-model="newUser.Gender" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Role" v-model="newUser.userRole"
                                    required>
                                <input class="form-control m-2" type="text" placeholder="Enter Email" v-model="newUser.emailAdd" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success"
                                    data-bs-dismiss="modal">Close</button>
                                <button type="reset" class="btn btn-outline-success"
                                    data-bs-dismiss="modal">Clear</button>
                                <button type="submit" class="btn btn-outline-success" @click="addUser()">Save
                                    User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        
    </section>
</template>

<script>
import EditProduct from '@/components/EditProduct.vue';
import EditUser from '@/components/EditUser.vue';

export default {
    data() {
        return {
            newProduct: {
                // prodID: '',
                prodName: '',
                quantity: '',
                amount: '',
                Catergory: '',
                prodUrl: '',
                prodDes: '',
            },
            
            newUser: {
                usersID: '',
                firstName: '',
                lastName: '',
                userAge: '',
                Gender: '',
                userRole: '',
                emailAdd: ''
            },
            editUser: {
                userID: '',
                firstName: '',
                lastName: '',
                userAge: '',
                Gender: '',
                userRole: '',
                emailAdd: ''
            },
        };
    },
    components:{
        EditProduct,
        EditUser
    },
    methods: {
        getProducts() {
            this.$store.dispatch('getProducts');
        },
        
        getUsers() {
            this.$store.dispatch('getUsers');
        },
        addProduct() {
            this.$store.dispatch('addProduct', this.newProduct);
            
        },
        
        deleteUser() {
            this.$store.dispatch('deleteUser', this.userId)
        },
        addUser() {
            this.$store.dispatch('addUser', this.newUser);
        },
        updateUser() {
            this.$store.dispatch('updateUser', this.editUser);
        }
    },
    computed: {
        product(){
            return this.$store.state.product
        },
        user(){
            return this.$store.state.user
        }
    },
    mounted() {
        this.getProducts(),
        this.getUsers()
    }
}
</script>

<style scoped>
.inner-admin {
    margin-top: 3.9rem;
    /* background-image: url(https://github.com/demilee06/Node-Images/blob/main/5616868-hd_2048_1080_25fps-ezgif.com-optimize.gif?raw=true); */
    background-size: contain
}

.table-responsive {
    width: 100%;
    background-color: transparent;
}

.table {
    width: 80rem;
    /* background-color: #96005A; */
    margin-top: 1rem;
    /* justify-content: center; */
}

.table th,
.table td {
    text-align: center;
    justify-content: center;
    align-content: center;
    background-color: rgba(128, 128, 128, 0.336);
    border: none;
}

.admin-page-table, .user-page-table {
    width: auto;
    display: grid;
    justify-content: center;
}

.quantity-buttons {
    display: flex;
    align-items: center;
}

.total-amount {
    text-align: end;
}

button.btn {
    color: white;
    background-color: #C2922F;
    margin-top: 40px;
    /* margin-left: 200px; */
    border: none;
}

button.btn:hover {
    background-color: #C2922F;
    color: white;
    border: none;
}

.products-sec {
    display: grid;
    justify-content: space-around;
}

.img-fluid {
    max-width: 100px;
    height: auto;
}

@media screen and (max-width: 300px) {}
</style>
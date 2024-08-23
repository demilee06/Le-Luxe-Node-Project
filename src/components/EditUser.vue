<template>
    <!-- Edit User Modal -->

    <button type="button" class="btn" data-bs-toggle="modal" :data-bs-target="'#adminEditUser'+user.userID">
        Edit
    </button>
    <div class="modal fade" :id="'adminEditUser'+user.userID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="editProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editProductLabel">Edit User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent>
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter Name" v-model="updateUser.firstName"
                                    required>
                                <input class="form-control m-2" type="text" placeholder="Enter Surname"
                                    v-model="updateUser.lastName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter Age" v-model="updateUser.userAge"
                                    required>
                                <input class="form-control m-2" placeholder="Enter Gender" v-model="Gender" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Role" v-model="updateUser.userRole"
                                    required>
                                <input class="form-control m-2" type="text" placeholder="Enter Email" v-model="updateUser.emailAdd"
                                    required>
                            </div>
                            <div class="modal-footer">
                                <button type="reset" class="btn btn-outline-success"
                                    data-bs-dismiss="modal">Clear</button>
                                <button type="button" class="btn btn-outline-success"
                                    data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-outline-success" @click="updateUserFx()">Save
                                    Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props:['user'],
    data(){
        return{
            updateUser: {
                userID: this.user.userID,
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                userAge: this.user.userAge,
                Gender: this.user.Gender,
                userRole: this.user.userRole,
                emailAdd: this.user.emailAdd,
            }
        }
    },
    methods:{
        updateUserFx() {
            this.$store.dispatch('updateUser', this.updateUser);
        },
    }
}
</script>
<style scoped>
   
</style>
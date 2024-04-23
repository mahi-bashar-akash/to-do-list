<template>

    <section class="content-section">
        <aside class="content-section-inner">

            <!-- project header part -->
            <header class="content-header">
                <!-- project title -->
                <div class="content-header-title">
                    To-do's list
                </div>

                <!-- search anything -->
                <div class="search-icon-position">
                    <input type="text" name="keyword" class="form-control search-input" placeholder="Search here anything" required>
                    <img :src="`/svg/search.svg`" class="search-icon" alt="">
                </div>

            </header>

            <!-- project body part -->
            <article class="content-body">

                <!-- project list data show -->
                <div class="single-data">
                    Chair
                    <div class="action">
                        <button type="button" class="btn btn-pencil" @click="managePopUpToggle()">
                            <img :src="`/svg/pencil.svg`" alt="">
                        </button>
                        <button type="button" class="btn btn-trash" @click="deletePopUpToggle()">
                            <img :src="`/svg/delete.svg`" alt="">
                        </button>
                    </div>
                </div>

            </article>

            <!-- project footer part -->
            <footer class="content-footer">

                <!-- project to do add button -->
                <div class="flex-end">
                    <button type="button" class="btn btn-add" @click="managePopUpToggle()">
                        <img :src="`/svg/plus.svg`" alt="">
                        <span>Add</span>
                    </button>
                </div>

                <!-- project manage popup box -->
                <div class="manage-popup-box" :class="{ 'active' : managePopUpIsActive }">
                    <form class="popup-content">
                        <div class="popup-header">
                            <div class="popup-title">Manage to do</div>
                            <button type="button" class="popup-close" @click="managePopUpToggle()">
                                <img :src="`/svg/close.svg`" alt="">
                            </button>
                        </div>
                       <div class="form-group">
                           <label for="to-do" class="form-label">To do</label>
                           <input id="to-do" type="text" name="to-do" class="form-control" required autocomplete="new-to-do">
                       </div>
                        <div class="form-group">
                            <button type="submit" class="btn-manage">
                                Save
                            </button>
                        </div>
                    </form>
                </div>

                <!-- project delete popup box -->
                <div class="delete-popup-box" :class="{ 'active' : deletePopUpIsActive }">
                    <form class="popup-content">
                        <div class="popup-header">
                            <div class="popup-title">Delete to do</div>
                            <button type="button" class="popup-close" @click="deletePopUpToggle()">
                                <img :src="`/svg/close.svg`" alt="">
                            </button>
                        </div>
                        <div class="form-delete">
                            <img :src="`/svg/delete.svg`" class="delete-icon" alt="">
                            Are you sure?
                        </div>
                        <div class="popup-footer">
                            <button type="button" class="btn btn-cancel" @click="deletePopUpToggle">
                                Close
                            </button>
                            <button type="button" class="btn btn-confirm">
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>

            </footer>

        </aside>

    </section>

</template>

<script>

export default {
    data() {
        return {
            managePopUpIsActive: false,
            deletePopUpIsActive: false,
        }
    },
    mounted() {  },
    methods: {

        /* Function to manage popup toggle */
        managePopUpToggle() {
            this.managePopUpIsActive = !this.managePopUpIsActive;
            this.deletePopUpIsActive = false;
        },

        /* Function to delete popup toggle */
        deletePopUpToggle() {
            this.deletePopUpIsActive = !this.deletePopUpIsActive;
            this.managePopUpIsActive = false;
        }
    }
}

</script>

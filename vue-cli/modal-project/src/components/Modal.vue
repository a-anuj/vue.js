<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ dark: theme === 'dark' }">
            <slot>Default content</slot>
            <div class="actions">
              <slot name="links"></slot>
            </div>
            <p> Click outside this popup to close!!</p>
        </div>
    </div>
</template>

<script>
 export default{
  props: ['theme'],
  methods:
  {
    closeModal() {
      this.$emit('close')
    }
  }
 }
</script>

<style>
  .modal{
    width: 400px;
    padding : 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop{
    top:0;
    position:fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1{
    color: #03cfb4;
    border: none;
    padding: 0;
  }
  .modal.dark{
    background-color: black;
    color: white;
  }
  .dark h1{
    color: white;
  }
  .modal .actions{
    text-align: center;
    margin: 30px 0px 10px 0px;
  }
  .modal .actions a{
    color: white;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }

  .modal.sale .actions{
    color: white;

  }
  .modal.sale .actions a{
    color: white;
  }
</style>
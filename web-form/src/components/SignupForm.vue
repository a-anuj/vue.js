<template>
  <form>
    <label>Email</label>
    <input type="email" required v-model="email">

    <label>Password</label>
    <input type="password" required v-model="password">

    <label>Role</label>
    <select v-model="role">
        <option value="App Developer">App Developer</option>
        <option value="AI/ML Engineer">AI/ML Engineer</option>
        <option value="Web Developer">Web Developer</option>
        <option value="DevOps">DevOps Engineer</option>
    </select>

    <div class="terms">
        <input type="checkbox" v-model="terms">
        <label>Accept Terms and conditions</label>
    </div>

  </form>
  <p>Email : {{ email }}</p>
  <p>Password : {{ password }}</p>
  <p>Role : {{ role }}</p>
  <p>Terms : {{ terms }}</p>
</template>

<script>
export default {
    data () {
        return {
            email : '',
            password : '',
            role:'Web Developer',
            terms:false
        }
    }
}
</script>

<style>
    form{
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    label{
        color: #aaa;
        display: inline-block;
        margin: 25px 0px 15px;
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input,select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid  #ddd;
        color: #555;
    }
    input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        margin: 50px 10px 0 0;
        position: relative;
        top: 2px;
    }
</style>
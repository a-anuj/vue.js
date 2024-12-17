<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" required v-model="email">

    <label>Password</label>
    <input type="password" required v-model="password">
    <div v-if="this.passwordError" class="error">
        {{ this.passwordError }}
    </div>

    <label>Role</label>
    <select v-model="role">
        <option value="App Developer">App Developer</option>
        <option value="AI/ML Engineer">AI/ML Engineer</option>
        <option value="Web Developer">Web Developer</option>
        <option value="DevOps">DevOps Engineer</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="currSkill" @keyup.alt="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>


    <div class="terms">
        <input type="checkbox" v-model="terms">
        <label>Accept Terms and conditions</label>
    </div>


    <div class="submit">
        <button>Create Account</button>
    </div>

  </form>
  <p>Email : {{ email }}</p>
  <p>Password : {{ password }}</p>
  <p>Role : {{ role }}</p>
  <p>Terms : {{ terms  }}</p>
  <p>Skills : {{ skills }}</p>
</template>

<script>
export default {
    data () {
        return {
            email : '',
            password : '',
            role:'Web Developer',
            terms:false,
            currSkill : '',
            skills:[],
            passwordError:''
        }
    },
    methods:
    {
        addSkill(e){
            if(e.key==="," && this.currSkill){
                if(!this.skills.includes(this.currSkill)){
                    this.skills.push(this.currSkill)
                }
                this.currSkill = ''
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((item)=> {
                return skill !== item
            })
        },
        handleSubmit() {
            this.passwordError = this.password.length>6 ? '' : "Password must be 7 characters long"
            
            if(!this.passwordError){
                console.log("Email : ",this.email)
                console.log("Password : ",this.password)
                console.log("Skills : ",this.skills)
                console.log("Role : ",this.role)
                console.log("Terms accepted? : ",this.terms)
                
            }
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
    .pill{
        display: inline-block;
        margin: 20px 10px 0 0;
        padding:6px 12px;
        background: rgb(201, 221, 201);
        border-radius: 5px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor:pointer
    }
    
    button{
        padding: 14px;
        margin-top: 20px;
        border:none;
        cursor: pointer;
        border-radius: 5px;
        background: white;
        text-align: center;
        transition: 500ms;
        color:black;
        border:1px solid black;
    }
    button:hover{
        transition: 500ms;
        border-radius: 10px;
        color: white;
        background:#404040;
        border: black solid 1px;
    }

    .submit{
        
        text-align: center;
    }

    .error{
        color:red;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }

</style>
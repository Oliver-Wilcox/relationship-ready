<template>
  <div class="nav">
    <div class="bg-blur" v-bind:class="{ blurActive: isBurgerActive }"></div>
    <div
      class="navigation-container"
      v-bind:class="{ navActive: isBurgerActive }"
    >
      <div class="menu-items" v-bind:class="{ menuTextActive: isBurgerActive }">
        <span class="menu-cont"><h3 class="menu">MENU</h3></span>
        <span class="home-cont"
          ><h1 class="home" v-bind:class="{ menuTextActive: isBurgerActive }">
            HOME
          </h1></span
        >
        <span class="programs-cont"
          ><h1
            class="programs"
            v-bind:class="{ menuTextActive: isBurgerActive }"
          >
            PROGRAMS
          </h1></span
        >
        <span class="whoarewe-cont"
          ><h1
            class="whoarewe"
            v-bind:class="{ menuTextActive: isBurgerActive }"
          >
            WHO ARE WE
          </h1></span
        >
       
        
        <span class="getintouch-cont"
          ><h1
            class="getintouch"
            v-bind:class="{ menuTextActive: isBurgerActive }"
          >
            GET IN TOUCH
          </h1></span
        >

<div class="socials-cont">
         <span class="email-burger-cont"
          ><h1
            class="email"
            v-bind:class="{ menuTextActive: isBurgerActive }"
          >
            Email
          </h1></span
        >
          <span class="insta-burger-cont"
          ><h1
            class="instagram"
            v-bind:class="{ menuTextActive: isBurgerActive }"
          >
            Instagram
          </h1></span
        >
          <span class="facebook-burger-cont"
          ><h1
            class="facebook"
            v-bind:class="{ menuTextActive: isBurgerActive }"
          >
           Facebook
          </h1></span
        >
        </div>
      </div>
    </div>

    <img class="logo" src="../assets/relLogo.svg" />
    <div class="burger-container">
      <div
        class="burger"
        v-on:click="isBurgerActive = !isBurgerActive, burgerOn()"
        v-bind:class="{ burgerActive: isBurgerActive }"
      >
        <div
          class="burger-circle"
          v-bind:class="{ burgerCircActive: isBurgerActive }"
        ></div>
        <div
          class="line one"
          v-bind:class="{ lineOneActive: isBurgerActive }"
        ></div>
        <div
          class="line two"
          v-bind:class="{ lineTwoActive: isBurgerActive }"
        ></div>
        <div
          class="line three"
          v-bind:class="{ lineThreeActive: isBurgerActive }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      isBurgerActive: false,
    };
  },

  methods:{
  burgerOn(){
      if(this.isBurgerActive == true){
      document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }
  }
  }
};
</script>

<style scoped>
.bg-blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0);
  
  pointer-events: none;
  transition: 0.4s;
  z-index: +2;
}

.menu {
  position: relative;
  opacity: 0.7;

  margin-top: 0vw;
  margin-bottom: 4vw;
  font-size: 1.4vw;
  margin-left: 5vw;

  text-align: left;
}

/*

.home-cont{
  background: blue;
  height: 5vw;
  width: 10vw;
 overflow: hidden;
 display: block;
 line-height: 5vw;
}

*/


.menu-items {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: 0.4s;
  transition-delay: 0.2s;

}

.navigation-container h1 {
  margin-top: -0.8vw;
  font-size: 3vw;
  text-align: left;
  margin-left: 5vw;
    cursor: pointer;
}

.menuTextActive {
  opacity: 1;
}

.blurActive {
  background: rgba(0, 0, 0, 0.1);
  display: block;
}
.navigation-container {
  position: fixed;
  left: 100%;
  height: 100vh;
  width: 40vw;
  background: #efebe6;
  z-index: +2;
  transition: 0.4s ease-in-out;
  overflow-y: scroll;
  top: 0;
margin: 0;
}

.navActive {
  left: 60%;
}

.logo {
  position: absolute;
  top: 2vw;
  left: 2vw;
  width: 8vw;
}

.burger-container {
  position: fixed;
top: 0;
margin: 0;
  right: 0;
  z-index: +5;
  width: 9.5vw;
  height: 100vh;
  
}

.burger {
  position: absolute;
  border: 4px solid #e1d6c2;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.6s ease-in-out;
  cursor: pointer;
}

.line {
  position: relative;
  width: 30px;
  height: 1px;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  background-color: black;
  margin: 7px 0;

  transition: 0.5s;
}

.socials-cont{
      margin-top: 3.5vw;
      
    }
      .socials-cont h1{
font-size: 1.9vw;
margin-top: 1vw;
    }






  @media (max-aspect-ratio: 200/200) {
    
  
    .menu-items {
        margin-top:0vh;
     height: 130vw;
    top: 70px;
    transform: none;
    }
    .menu {
      opacity: 0.7;
      
      margin-bottom: 10vw;
      font-size: 4.4vw;
      margin-left: 10vw;
      transform: none;
      text-align: left;
    }

    .navigation-container h1 {
      font-size: 9vw;
      text-align: left;
      margin-left: 10vw;
      transform: none;
      width: 80vw;
    }

    .logo {
      top: 5vw;
      left: 4vw;
      width: 22vw;
    }

    .bg-blur {
      display: none;
    }

    .navActive {
      left: 0%;
    }

    .burger-container {
      height: 66px;
      width: 75px;
      position: fixed;
    }

    .navigation-container {
      width: 100vw;
    }

    .burger {
      width: 38px;
      height: 38px;
      border: 3px solid #e1d6c2;
    }
    .line {
      width: 22px;
      margin: 5px 0;
      top: calc(50% - 11px);
      left: calc(50% - 11px);
    }
    .socials-cont{
      margin-top: 10vw;
      
    }
      .socials-cont h1{
font-size: 6.5vw;

    }
  }


.burgerActive {
  border: 0px solid #e1d6c2;
}

.burger-circle {
  position: absolute;
  width: 10%;
  height: 10%;
  background: none;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: 0.6s ease-in-out;
}

.burgerCircActive {
  width: 120%;
  height: 120%;
  background: white;
}

.lineOneActive {
  margin: 0 0;
  top: 50%;
  transform: rotate(45deg);
  width: 14px;
  left: calc(50% - 7px);
}
.lineTwoActive {
  margin: 0 0;
  top: 50%;
  width: 0px;
  opacity: 0;
}
.lineThreeActive {
  margin: 0 0;
  top: calc(50% - 2px);
  transform: rotate(-45deg);
  width: 14px;
  left: calc(50% - 7px);
}


</style>

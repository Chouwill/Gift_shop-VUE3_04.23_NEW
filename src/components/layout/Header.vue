<template>
  <header>
    <div class="search">
      <div class="search_box">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <input type="search" class="search_input" placeholder="Search" />
      </div>
    </div>
    <nav class="logo_menu">
      <h1><router-link to="/">PPC</router-link></h1>
      <ul :class="['menu', { show: menuIsShow }]" @click="clickItem">
        <li class="menu_search">
          <div class="search_box">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            <input type="search" class="search_input" placeholder="Search" />
          </div>
        </li>
        <li>
          <router-link to="/home">Home</router-link>
          <!-- <Index /> -->
        </li>
        <!-- <li>
          <router-link to="/accessories">Accessories</router-link>
        </li> -->
        <!-- <li>
          <router-link to="/stationery">Stationery</router-link>

        </li> -->
        <li>
          <router-link to="/sale">Sale</router-link>
        </li>
        <!-- <li>
          <router-link to="/gift-card">Gift Card</router-link>
        </li> -->
      </ul>
    </nav>
    <div class="member">
      <a href="#"
        ><font-awesome-icon icon="fa-solid fa-user" class="search_icon"
      /></a>
      <router-link to="/shoppingcart">Cart({{ cartNum }})</router-link>
      <!-- <button
        :class="['phone_menu', { active: menuIsShow }]"
        @click="toggleMenu"
      >
        <font-awesome-icon
          :icon="`fa-solid ${menuIsShow ? 'fa-xmark' : 'fa-bars'}`"
        />
      </button> -->
      <div class="menu-btn-bg">
        <div
          class="menu-button"
          :class="{ open: menuIsShow }"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
          <!-- <span></span> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../../stores/cart";
// import Index from "../../views/Index.vue";

const cart = useCartStore();

const cartNum = computed(() => cart.cartNum);

const menuIsShow = ref(false);
// const iconName = computed(() =>
//   menuIsShow.value ? "fa-solid fa-xmark" : "fa-solid fa-bar"
// );

const clickItem = (e) => {
  // console.log(e.target.nodeName)
  if (e.target.nodeName === 'A') {
    menuIsShow.value = false
  }
}

const toggleMenu = () => {
  menuIsShow.value = !menuIsShow.value;
};
// const toggleMenu = () => {
//   menuIsShow.value = !menuIsShow.value;
//   console.log("menuIsShow:", menuIsShow.value);
// };
</script>

<style lang="scss" scoped>
@import "../../assets/scss/media";
* {
  box-sizing: border-box;
  color: #000;
}
header {
  width: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  @include pad {
    display: grid;
    grid-template-columns: 1fr auto;
  }
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;
  @include pad {
    display: none;
  }
}

.menu_search {
  display: none;
  .search_box {
    border-bottom-color: #000;
    .search_input {
      background-color: transparent;
      flex: 1;
    }
  }
  @include pad {
    display: block;
  }
}


.search_box {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 2px solid transparent;
  &:focus,
  &:hover {
    border-bottom-color: #000;
  }
  .search_icon {
    font-size: 1.2rem;
  }
  .search_input {
    border: none;
    padding: 8px 4px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #000;
      font-size: 1rem;
    }
  }
  &:focus-within {
    border-bottom: 2px solid #000;
  }
}

.logo_menu {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  h1 {
    // border: 1px solid greenyellow;
    text-align: center;
    padding: 30px 0;
    box-sizing: border-box;
    font-family: syne;
    font-weight: 700;
    font-size: 45px;
  }
  @include pad {
    grid-template-rows: unset;
  }
}

.menu {
  width: 30%;
  margin: 0 auto;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: normal;
  text-align: center;
  display: flex;
  // padding: 20px 0;
  // border: 5px solid gray;
  // gap: 10px;
  padding-left: 0;
  box-sizing: border-box;
  justify-content: space-evenly;
  align-items: center;
  @include pad {
    // display: none;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    gap: 5vh;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    top: 0;
    right: 0px;
    background-color: #D3BBDD;
    padding: 0 2rem;
    &:not(.show) {
      display: none;
    }
    li {
      width: 100%;
      text-align: left;
    }
  }
}

.member {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  .menu-button {
  }
  @include pad {
    // border: none;
    .menu-btn-bg {
      background-color: #D3BBDD;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      position: relative;

      .menu-button {
        width: 50%;
        height: 50%;
        transform: rotate(0deg);
        transition: 0.5s ease-in-out;
        cursor: pointer;
        z-index: 105;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        right: 0;
        left: 0;
        bottom: 0;
        gap: 5px;
        margin: auto;

        span {
          display: block;
          position: absolute;
          height: 4px;
          width: 100%;
          background: #333;
          border-radius: 4px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
          &:active {
            display: none;
          }

          &:nth-child(1) {
            top: 10px;
            left: 0;
          }

          &:nth-child(2) {
            top: 0px;
          }

          &:nth-child(3) {
            top: 20px;
          }
        }

        &.open {
          span {
            top: 10px;
            transform-origin: center;
            &:nth-child(1),
            &:nth-child(4) {
              width: 0%;
              left: 50%;
            }

            &:nth-child(2) {
              transform: rotate(45deg);
            }

            &:nth-child(3) {
              transform: rotate(-45deg);
            }
          }
        }
      }
    }
  }
}

.phone_menu {
  display: none;
  @include pad {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 101;
    &.active {
      position: fixed;
      right: 20px;
    }
  }
}
</style>
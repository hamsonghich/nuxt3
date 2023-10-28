<template>
  <div class="demo-date-picker">
    <div class="container p-4">
      <div class="p-0 relative w-[200px]">
        <p class="label-datepicker-top">Date of Birth</p>
        <el-date-picker
            class="absolute"
            v-model="datePicked"
            type="date"
            placeholder="Vài cốc phúc long "
            format="YYYY MMM DD"
            value-format="YYYY-MMM-DD"
        >
        </el-date-picker>
        <div class="icon-calendar">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V7H18V20Z" fill="url(#paint0_linear_28_9655)"/>
            <defs>
              <linearGradient id="paint0_linear_28_9655" x1="27.1111" y1="-0.366664" x2="-7.41926" y2="16.2213" gradientUnits="userSpaceOnUse">
                <stop offset="0.255208" stop-color="#F1790A"/>
                <stop offset="1" stop-color="#E7B70F"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import  _ from 'lodash'
import { h, ref, shallowRef, onMounted } from 'vue'
const datePicked = ref('')

onMounted(() => {
  const footerCalendar = document.querySelector('.el-picker-panel__footer')
  console.log(123, footerCalendar)
  if (footerCalendar) {
    const div_ = document.createElement("div");
    div_.innerHTML = `
     <button class="btn-clear-date">
        <span>Clear</span>
     </button>
    `
    footerCalendar.appendChild(div_);

    const btnClearDate = document.querySelector('.btn-clear-date')
    btnClearDate && btnClearDate.addEventListener('click', e => {
      datePicked.value = null
    })

    const iconCalendar = document.querySelector('.icon-calendar')
    iconCalendar && iconCalendar.addEventListener("click", debounce_((event: any) => {
      document.querySelector('.el-input__wrapper').click()
    }, 200));

    document.querySelector('.el-input__inner').addEventListener('focusin', e => {
      document.querySelector('.label-datepicker-top').classList.add('focus')
    })
    document.querySelector('.el-input__inner').addEventListener('focusout', e => {
      document.querySelector('.label-datepicker-top').classList.remove('focus')
    })
  }
})

let debounced_fun = _.debounce(function () {
  console.log("function is executing immideately!!")
}, 5000, { leading: true, trailing: true });

function debounce_(fn: any, ms: any) {
  let timer: string | number | NodeJS.Timeout | undefined;

  return function() {
    const args = arguments;
    const context = this;

    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, ms)
  }
}

</script>
<style lang="scss">
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .container {
  flex: 1;
  border-right: solid 1px var(--el-border-color);
}
.demo-date-picker .container .block {
  border-right: none;
}
.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
}
.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.el-input__suffix,.el-input__prefix {
  display: none !important;
}
.el-picker-panel__content {
  width: 300px!important;
}

.el-picker-panel__footer {
  display: flex !important;
  justify-content: end !important;
  align-items: center !important;
  gap: 0.5rem !important;
  button:nth-child(2) {
    display: none !important;
  }

  button {
    all: unset !important;
    height: 1.5rem !important;
    display: flex !important;
    justify-content: end !important;
    align-items: center !important;
    padding: 0 0.7rem !important;
    border: 1px solid gray !important;
    border-radius: 0.5rem !important;
    span {
      font-size: 12px !important;
    }
  }
  button:hover {
    // cho nay em tu viet nhe
  }
}
.icon-calendar {
  position: absolute;
  top: 4px;
  right: -13px;
}
.label-datepicker-top {
  position: absolute;
  top: -0px;
  left: 6px;
  color: black;
  z-index: -1;
  font-size: 9px;
  background: white;
  padding: 0 5px;
  transition: 0.35s ease-in-out;
}
.label-datepicker-top.focus {
  position: absolute;
  top: -6px;
  left: 6px;
  color: black;
  z-index: 2;
  font-size: 9px;
  background: white;
  padding: 0 5px;
  transition: 0.35s ease-in-out;
}
</style>

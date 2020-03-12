<template>
  <div class="six">
     <div class="six1">
      <div class="mask">
        <div class="mask-c">
          <div class="mask-h">
            <h1>SPECIAL TOUR IN JUNE, DISCOVER AMERICA FOR 100</h1>
            <h1>
              CUSTOMERS WITH DISCOUNT
              <span class="fz">40%</span>
            </h1>
          </div>
          <div class="time">
            <span>0</span>
            <span>0</span>
            <span>00</span>
            <span>00</span>
          </div>
          <div class="btn">
            <span>参观</span>
          </div>
        </div>
      </div>
    </div>
    <div class="six2">
      <div class="six-top">
        <h1>
          MEET
          <span style="color:#ffb300">THE GUYS</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
      </div>
      <div class="meet">
        <div class="team" v-for="(item,i) in [1,2,3]" :key="i">
          <div class="team-img">
            <img :src="require('@/assets/team/'+item+'.jpg')" alt />
          </div>
          <div class="team-icon">
            <div class="bot-con">
              <div class="tit1">JON SMITH</div>
              <div class="tit2">Chief CEO Officer</div>
              <ul>
                <li>😁</li>
                <li>😁</li>
                <li>😂</li>
                <li>😄</li>
                <li>😊</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.six {
  height: 1300px;
  text-align: center;
}
.six1 {
  // background-image: url("");
  height: 485px;
  margin-bottom: 100px;
  overflow: hidden;
  .mask {
    color: #fff;
    padding-top: 100px;
    height: 100%;
    background: #000;
    opacity: 0.7;
    .mask-c {
      //   width: 750px;
      margin: 0 auto;
      .mask-h {
        height: 110px;
        h1 {
          font-size: 30px;
          .fz {
            font-size: 50px;
            color: #ffb330;
          }
        }
      }
      .time {
        height: 65px;
        margin: 44 px 0;
        span {
          background: rgba(255, 255, 255, 0.2) none repeat scroll 0 0;
          font-size: 36px;
          padding: 8px 15px;
          margin: 0 8px;
          color: #ffb330;
        }
      }
      .btn {
        span {
          border: 1px solid #ffb300;
          border-radius: 20px;
          color: #fff;
          display: inline-block;
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          padding: 0 35px;
          text-transform: uppercase;
          transition: all 0.3s ease 0s;
        }
        span:hover {
          background: #ffb300;
        }
      }
    }
  }
}
.six2 {
  height: 655px;
  .six-top {
    height: 130px;
    margin-bottom: 45px;
    background: url("../../assets/shape/1.png") no-repeat bottom center;
  }
  p {
    line-height: 55px;
  }
  .meet {
    padding-left: 10%;
    display: flex;
    .team {
      margin-right: 5%;
      width: 370px;
      position: relative;
      height: 390px;
      padding: 1px 1px 0;
      transition: all 0.5s;
      .team-img {
        width: 100%;
        height: 100%;
        background: #ffb330;
        transition: all 0.5s ease 0s;
        img {
          width: 100%;
          transition: all 0.5s;
          height: 100%;
        }
      }
      .team-img:hover img {
        // translateY(-50%)
        // transform:scale(.9);
      }

      .team-icon {
        width: 88%;
        height: 140px;
        border: 1px solid #ccc;
        position: absolute;
        bottom: -105px;
        left: 20px;
        background: #fff;
        .bot-con {
          padding: 30px 0;
        }
        .bot-con > .tit1 {
          color: #252525;
          font-size: 18px;
          margin-bottom: 10px;
          font-weight: 500;
        }
        .bot-con > .tit2 {
          color: #909090;
          font-size: 14px;
          margin-bottom: 27px;
        }
        .bot-con > ul {
          display: flex;
          text-align: center;
          padding: 0 20px;
        }
        .bot-con > ul > li {
          padding-right: 31px;
        }
      }
    }
    .team:hover .team-img {
      padding: 20px 20px 0;
    }
    .team:hover {
      height: 345px;
    }
  }
}
</style>
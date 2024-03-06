# Code Assignment : 

### Create our own `create-reat-app` with parcel.

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: block;
  margin: 0 auto;
}

/*Header - Nav Bar*/
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
  border-radius: 5px;
  align-items: center;
  background-color: papayawhip;
  box-shadow:5px 5px 10px 0 rgb(235, 195, 195);
}

.logo {
  width: 100px;
  cursor: pointer;
}

.nav-items > ul {
  font-size: 20px;
  display: flex;
  list-style-type: none;
  color: black;
}

.nav-items > ul > li {
  cursor: pointer;
  padding: 8px;
  margin: 5px;
}

.Login{
  padding: 0px 10px;
  cursor: pointer;
}


/*Shimmer*/
.shimmer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  margin-top: 40px;
}
.shimmer-card {
  flex-basis: 250px;
  padding: 10px;
  margin-bottom: 10px;
  border-color: #d3d5df;
  box-shadow: 0 4px 7px 0 rgb(218 220 230 / 60%);
}
.shimmer-title {
  width: 60%;
  margin-top: 10px;
}
.shimmer-tags {
  width: 80%;
  margin-top: 4px;
}
.shimmer-details {
  width: 100%;
  margin-top: 18px;
}
.shimmer-container .shimmer-img {
  height: 144px;
  width: 230px;
}

/*Animation to Shimmer Component Cards */
.stroke {
  height: 15px;
  background: #777;
}
.animate {
  animation: shimmer 3s;
  animation-iteration-count: infinite;
  background: linear-gradient(to right, #e6e6e6 5%, #cccccc 25%, #e6e6e6 35%);
  background-size: 1000px 100%;
}
@keyframes shimmer {
  from {
    background-position: -1000px 0;
  }
  to {
    background-position: 1000px 0;
  }
}


/*Cusines Text Reducer*/
.text{
  text-overflow: ellipsis;  
  margin-bottom: 8px;
  cursor: pointer;          
  word-break: break-all;
  overflow:hidden;         
  white-space: nowrap;
}
.text:hover{
  overflow: visible;        
  white-space: normal;
  height:auto;
}

/*Search Box*/
.search-container {
  display: flex;
  justify-content: center;
  margin: 50px 0;
  gap: 10px;
}

.search-container input {
  min-width: 250px;
  padding: 10px;
}

.search-container input:focus {
  outline: 0;
}

.search-container button {
  padding: 10px 15px;
  cursor: pointer;
  background-color: papayawhip;
}


/*Restaurant Card*/
.res-container {
    width:90%;
    margin:2rem  auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap: 1rem;
}

.res-card {
    padding: 1rem;
    width:250px;
    border-radius:5px;
    box-shadow:5px 5px 10px 0 rgb(235, 195, 195);

}
.res-card > img {
    width:100%;
    border-radius:5px;
}
.res-card:hover {
  border: 1px solid rgb(235, 195, 195);
  cursor: pointer;
}

.res-logo {
  width: 100%;
}

.search {
    padding: 10px;
  }

.star{
  background-color: green;
  color:  rgb(255, 255, 255);
  border: 1px solid green;
  padding: 2px;
  font-weight: bold;
}
.star1{
  background-color: rgb(235, 53, 53);
  color: white;
  border: 1px solid black;
  padding: 2px;
  font-weight: bold;
}
.delivery{
  margin-left: 15px;
}
.divider{
  margin-left: 15px;
}
.CostForTwo{
  margin-top: 10px;
}
.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}
/*Footer Section*/
.footer {
  padding: 20px 10px;
  border: 1px solid black;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
}
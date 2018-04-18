import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { isOnline } from '../../helper/electron'

class Loading extends Component {
  componentDidMount() {
    if (this.props.history.location.pathname !== '/') {
      this.props.history.push('/')
    }
    isOnline(this.props.end)
  }

  render() {
    return (
      <article className="petal-loading">
        <div>
          <div className="petal-loading-logo-wrapper">
            <img
              src="./resources/petal.svg"
              alt="logo"
              className="petal-loading-logo"
            />
          </div>
        </div>
        <div>
          <svg width="167px" height="80px" className="petal-loading-text">
            <g>
              <path
                d="M21.007743,46.4867272 C20.9426029,47.1410542 20.7309008,47.7507588 20.3726304,48.3158594 C20.01436,48.88096 19.4769624,49.1337644 18.7604216,49.0742801 C17.6530403,49.0147959 16.6922386,48.6281539 15.8779877,47.9143426 C15.0637368,47.2005313 14.6566174,46.6056975 14.6566174,46.1298234 C14.7217575,40.9546916 14.5426249,35.6755416 14.1192145,30.2922149 C13.695804,24.9088883 13.0281282,19.5405132 12.1161672,14.1869287 C12.1161672,13.9489916 12.1813063,13.6813164 12.3115864,13.383895 C12.4418666,13.1459579 12.6047143,12.8634118 12.8001345,12.5362483 C12.9955548,12.2090848 13.3212503,11.8967971 13.7772308,11.5993757 C14.2332113,11.4209229 14.7380393,11.4506646 15.2917299,11.6886017 C15.8454206,11.9265388 16.3828181,12.2834391 16.9039387,12.7593133 C17.4250593,13.2351874 17.881033,13.7705379 18.2718735,14.3653806 C18.6627139,14.9602233 18.9558399,15.5253154 19.1512601,16.0606739 C19.3466803,17.2503593 19.5420976,18.5589937 19.7375178,19.9866162 C19.9329381,21.4142388 20.0957858,22.9013233 20.226066,24.4479144 C21.7894278,23.6746188 23.287627,22.8121098 24.7207087,21.8603615 C26.1537903,20.9086131 27.4077179,19.8676539 28.4825292,18.7374528 C29.5573404,17.6072516 30.3878639,16.4324548 30.9741246,15.2130272 C31.5603853,13.9935996 31.7558026,12.7295778 31.5603823,11.4209238 C31.4301022,10.4096912 30.941559,9.48769878 30.094738,8.65491896 C29.247917,7.82213915 27.945135,7.19756365 26.186353,6.78117375 C22.1476684,5.94839393 18.5324484,5.90378139 15.3405848,6.6473348 C12.1487211,7.39088821 9.08718348,8.62516835 6.1558801,10.3502123 C5.30905913,10.945055 4.52738995,11.3019553 3.81084913,11.4209238 C3.0943083,11.5398924 2.47548687,11.5101507 1.95436627,11.3316978 C1.43324567,11.153245 1.04241109,10.8855698 0.781850785,10.5286642 C0.521290485,10.1717585 0.391012289,9.81485827 0.391012289,9.45795263 C0.52129244,8.08981436 1.25410729,6.85553422 2.58947883,5.75507517 C3.92485037,4.65461613 5.34162575,3.71775289 6.83984747,2.94445734 C8.79404972,2.05219325 11.2041963,1.308651 14.0703596,0.713808274 C16.9365229,0.118965547 19.818928,-0.104097129 22.7176614,0.0446135525 C25.6163947,0.193324234 28.335952,0.832770573 30.876415,1.96297175 C33.4168779,3.09317293 35.3710508,4.90741603 36.7389924,7.40575549 C37.9766538,10.3799691 38.253495,13.0567212 37.5695242,15.4360921 C36.8855534,17.815463 35.6641953,19.9866064 33.9054133,21.9495874 C32.1466313,23.9125684 30.0621802,25.7119407 27.6519974,27.3477582 C25.2418146,28.9835757 22.9619462,30.485531 20.8123237,31.8536693 C20.9426039,34.4709773 21.0240277,37.0287627 21.0565978,39.5271021 C21.0891678,42.0254416 21.072883,44.3452934 21.007743,46.4867272 Z M68.2014913,25.340174 C65.6610284,26.7083123 62.9251863,27.7641423 59.9938829,28.5076957 C57.0625795,29.2512491 53.9033333,29.6230202 50.5160494,29.6230202 C50.6463295,31.7049698 51.2977205,33.3556336 52.4702419,34.5750612 C53.6427632,35.7944888 55.1083929,36.5231602 56.867175,36.7610973 C57.9094162,36.8800658 58.9679265,36.8503241 60.0427377,36.6718713 C61.117549,36.4934185 62.127205,36.2108724 63.0717361,35.8242246 C64.0162672,35.4375769 64.8793602,35.0063224 65.6610411,34.5304482 C66.442722,34.054574 67.1266825,33.578707 67.7129432,33.1028328 C68.2992039,32.6269586 68.9180253,32.3146709 69.5694261,32.1659602 C70.2208268,32.0172495 70.7093701,32.0023786 71.0350704,32.1213472 C71.9470315,32.4187686 72.272727,33.3110193 72.0121667,34.7981261 C70.9699255,36.7016228 69.4717262,38.3225449 67.517524,39.660941 C65.5633217,40.9993372 63.3811619,41.8469754 60.9709792,42.203881 C58.8864968,42.5607866 56.7369065,42.4715616 54.522144,41.9362031 C52.3073814,41.4008446 50.3206389,40.3598855 48.5618569,38.8132944 C47.0636352,37.4451561 45.923701,35.8391049 45.1420201,33.9950924 C44.3603392,32.15108 43.8717959,30.2476118 43.6763757,28.2846308 C43.4809555,26.4406183 43.660088,24.6858586 44.2137786,23.020299 C44.7674693,21.3547393 45.6305623,19.8825257 46.8030837,18.6036138 C47.975605,17.324702 49.4412347,16.268872 51.2000168,15.4360921 C52.9587988,14.6033123 55.0106804,14.1274453 57.3557231,14.0084767 C60.1567463,13.8300239 62.6971711,14.305891 64.9770737,15.4360921 C67.2569764,16.5662933 68.8528843,18.1426029 69.7648453,20.1650682 C70.2859659,21.2952693 70.4325289,22.2767451 70.2045386,23.1095249 C69.9765484,23.9423048 69.3088726,24.685847 68.2014913,25.340174 Z M56.9648846,19.2728085 C56.3134838,19.3917771 55.6132385,19.5999689 54.8641277,19.8973903 C54.1150168,20.1948116 53.4310563,20.5665828 52.8122256,21.0127148 C52.1933948,21.4588469 51.6397125,21.9644556 51.151162,22.5295562 C50.6626114,23.0946568 50.3857702,23.7341031 50.3206301,24.4479144 C51.4280114,24.4479144 52.6493695,24.3586893 53.984741,24.1802365 C55.3201126,24.0017837 56.6228945,23.778721 57.893126,23.5110418 C59.1633575,23.2433625 60.3358612,22.9310748 61.4106725,22.5741692 C62.4854837,22.2172635 63.3811463,21.8306216 64.0976871,21.4142316 C63.5765665,20.2840305 62.6157648,19.5851007 61.2152532,19.3174215 C59.8147416,19.0497423 58.3979662,19.0348715 56.9648846,19.2728085 Z M101.031925,22.3957172 C102.269586,22.336233 103.507229,22.6039082 104.744891,23.1987509 C105.982552,23.7935936 106.601374,24.715586 106.601374,25.9647558 C106.471093,26.9759884 105.868557,27.6154347 104.793746,27.883114 C103.718934,28.1507932 102.855841,28.2846308 102.20444,28.2846308 C100.901639,28.2846308 99.5011484,28.3143725 98.0029267,28.3738567 C96.5047049,28.433341 94.9739361,28.5225661 93.4105743,28.6415346 C93.2802942,30.6045156 93.1663008,32.4485004 93.0685906,34.1735443 C92.9708805,35.8985882 92.8894567,37.4302853 92.8243166,38.7686814 C92.7591765,40.1070776 92.726607,41.1926492 92.726607,42.0254291 C92.726607,42.8582089 92.7591765,43.3043342 92.8243166,43.3638185 C94.2573982,43.1258814 95.8044518,42.7243686 97.4655237,42.159268 C99.1265956,41.5941674 100.787643,40.9695919 102.448715,40.2855228 C104.109786,39.6014537 105.738264,38.8876531 107.334196,38.1440997 C108.930128,37.4005463 110.444612,36.7016166 111.877693,36.0472896 C112.529094,35.7498682 113.131631,35.6606431 113.685321,35.7796117 C114.239012,35.8985802 114.580992,36.1662554 114.711272,36.5826453 C114.841553,37.2369723 114.743844,38.039998 114.418143,38.9917463 C114.092443,39.9434947 113.506191,40.8060037 112.65937,41.5792992 C111.682269,42.2931105 110.395772,43.111007 108.79984,44.0330132 C107.203908,44.9550194 105.494007,45.8323993 103.670085,46.6651791 C101.846163,47.4979589 100.005983,48.2266304 98.1494911,48.8512152 C96.292999,49.4758001 94.6482367,49.8475712 93.2151551,49.9665398 C91.0655326,50.1449926 89.4370552,49.6096421 88.3296739,48.3604724 C87.2222926,47.1113027 86.6034712,45.5349931 86.473191,43.6314964 C86.3429109,41.7279997 86.3266261,39.5271146 86.4243362,37.0287751 C86.5220463,34.5304357 86.6360397,31.8834253 86.7663199,29.0876645 C85.5286585,29.206633 84.3398699,29.3107289 83.1999186,29.3999553 C82.0599673,29.4891817 80.9688874,29.5932776 79.9266462,29.7122462 C79.0798252,29.7122462 78.1515931,29.533796 77.1419219,29.1768904 C76.1322508,28.8199848 75.6274228,28.1359259 75.6274228,27.1246933 C75.6274228,26.7677876 75.7902705,26.2919206 76.1159709,25.6970779 C76.4416713,25.1022351 77.1582013,24.6561098 78.2655826,24.3586884 C80.9363257,23.9422985 83.9001546,23.5853982 87.1571584,23.2879769 C87.3525786,20.4922161 87.5805655,17.7857222 87.8411258,15.1684143 C88.1016861,12.5511063 88.3296729,10.171771 88.5250931,8.03033723 C88.5902332,7.31652595 88.81822,6.69195046 89.2090605,6.15659201 C89.5999009,5.62123355 90.0233051,5.35355834 90.4792856,5.35355834 C91.5866669,5.29407407 92.6451772,5.54687843 93.6548484,6.11197902 C94.6645195,6.67707961 95.1693476,7.31652595 95.1693476,8.03033723 C94.9087873,10.0528025 94.6645156,12.3429126 94.4365254,14.9007364 C94.2085351,17.4585601 93.996833,20.0758288 93.8014128,22.7526211 C95.1042143,22.6336525 96.358142,22.5592983 97.5632333,22.5295562 C98.7683247,22.499814 99.9245437,22.4552015 101.031925,22.3957172 Z M143.144773,13.294669 C143.405333,14.9602287 143.617035,16.7298592 143.779885,18.6036138 C143.942736,20.4773684 144.073014,22.3659657 144.170724,24.2694625 C144.268434,26.1729592 144.317288,28.016944 144.317288,29.8014722 C144.317288,31.5860003 144.284719,33.1920516 144.219579,34.6196741 C146.304061,35.9283281 147.557989,37.0882541 147.981399,38.0994867 C148.40481,39.1107193 148.453664,40.00297 148.127964,40.7762656 C147.737123,41.8469825 147.036878,42.3972038 146.027207,42.4269459 C145.017536,42.456688 143.861317,42.1444003 142.558515,41.4900733 C141.646554,42.084916 140.604329,42.7243623 139.431807,43.4084315 C138.259286,44.0925006 137.021643,44.7468178 135.718842,45.3714027 C134.41604,45.9959875 133.113258,46.5462088 131.810457,47.022083 C130.507655,47.4979572 129.302582,47.8251158 128.1952,48.0035686 C126.110718,48.3009899 124.237969,47.9440897 122.576897,46.932857 C120.915825,45.9216244 119.792176,44.4047982 119.205915,42.3823329 C118.815075,41.0141946 118.717366,39.6014644 118.912786,38.1440997 C119.108206,36.686735 119.59675,35.2888756 120.378431,33.9504794 C121.160111,32.6120833 122.218622,31.4075448 123.553993,30.3368279 C124.889365,29.266111 126.468988,28.4333437 128.29291,27.838501 C128.748891,27.6600482 129.383997,27.5113397 130.198248,27.3923712 C131.012499,27.2734026 131.859307,27.2287901 132.738698,27.2585322 C133.618089,27.2882743 134.513752,27.4518536 135.425713,27.749275 C136.337674,28.0466964 137.184482,28.5523051 137.966163,29.2661164 C137.966163,28.2548837 137.949878,27.1395704 137.917308,25.9201428 C137.884738,24.7007152 137.835884,23.466435 137.770744,22.2172653 C137.705604,20.9680956 137.62418,19.7932988 137.52647,18.6928398 C137.428759,17.5923807 137.314766,16.6555175 137.184486,15.882222 C137.054206,14.9899579 136.679656,14.4397366 136.060825,14.2315416 C135.441994,14.0233467 134.67661,14.0679592 133.764649,14.3653806 C132.201287,14.8412548 130.377392,15.7632472 128.29291,17.1313854 C126.208428,18.4995237 124.221685,19.9568665 122.332623,21.5034576 C121.746362,22.0388161 121.078687,22.2767496 120.329576,22.2172653 C119.580465,22.157781 118.945359,21.8901058 118.424238,21.4142316 C117.903117,20.9383575 117.609992,20.3881362 117.544851,19.7635513 C117.479711,19.1389665 117.740268,18.4697784 118.326528,17.7559672 C119.43391,16.6852503 120.671553,15.5848077 122.039494,14.4546065 C123.407436,13.3244054 124.840496,12.2983171 126.338718,11.3763108 C127.836939,10.4543046 129.367708,9.69589151 130.93107,9.10104878 C132.494432,8.50620605 134.05777,8.17904746 135.621132,8.11956319 C137.901035,8.06007892 139.65979,8.52107511 140.897452,9.50256561 C142.135113,10.4840561 142.884213,11.7480779 143.144773,13.294669 Z M131.810457,32.478251 C130.963636,32.6567039 130.067973,33.028475 129.123442,33.5935756 C128.178911,34.1586762 127.332103,34.842735 126.582992,35.6457727 C125.833881,36.4488104 125.280198,37.3410611 124.921928,38.3225516 C124.563658,39.3040421 124.547373,40.270647 124.873073,41.2223954 C125.003353,41.579301 125.280195,41.8469762 125.703605,42.0254291 C126.127016,42.2038819 126.599274,42.2336236 127.120395,42.114655 C128.683756,41.8172337 130.458797,41.2372707 132.445569,40.3747487 C134.432341,39.5122268 136.011965,38.5753636 137.184486,37.5641309 C137.184486,37.2072253 136.989069,36.7462291 136.598228,36.1811285 C136.207388,35.6160279 135.751414,35.0509358 135.230293,34.4858352 C134.709173,33.9207346 134.139206,33.4299967 133.520375,33.0136068 C132.901544,32.5972169 132.331577,32.4187668 131.810457,32.478251 Z M162.00273,4.55052467 C162.328431,11.0343104 162.882113,17.7410615 163.663794,24.6709793 C164.445475,31.6008971 165.292283,38.2184231 166.204244,44.523756 C166.399664,47.141064 165.617995,48.4794401 163.859213,48.5389243 C163.468373,48.5389243 163.077538,48.4050867 162.686698,48.1374075 C162.295857,47.8697283 161.937592,47.5276988 161.611892,47.1113089 C161.286191,46.694919 160.976781,46.2487937 160.68365,45.7729195 C160.39052,45.2970453 160.211388,44.8806617 160.146248,44.523756 C159.625127,41.4900581 159.136584,38.2779556 158.680603,34.887352 C158.224623,31.4967485 157.817503,28.091325 157.459233,24.6709793 C157.100962,21.2506336 156.791552,17.9046935 156.530991,14.6330585 C156.270431,11.3614235 156.107583,8.35751277 156.042443,5.62123623 C156.172723,4.19361369 156.40071,2.98907523 156.726411,2.00758473 C157.052111,1.02609424 157.736072,0.565098038 158.778313,0.624582311 C159.885694,0.684066583 160.683648,1.0855794 161.172199,1.82913281 C161.660749,2.57268622 161.93759,3.47980777 162.00273,4.55052467 Z"
                id="Petal"
                fill="#2E8B57"
              />
              <path
                d="M37.1795901,64.4648257 C36.8445149,65.0302652 36.5094446,65.5852253 36.1743694,66.1297225 C35.8392942,66.6742198 35.4780466,67.297241 35.0906158,67.9988048 C34.7031851,68.7003685 34.25817,69.5118667 33.7555571,70.4333236 C33.2529442,71.3547806 32.6665714,72.4751716 31.9964209,73.7945304 C31.8288832,74.1086634 31.6613481,74.3599661 31.4938105,74.5484459 C31.3262729,74.7369257 31.127325,74.8311642 30.8969607,74.8311642 C30.5828277,74.8311642 30.3367605,74.7421612 30.1587518,74.5641524 C29.9807431,74.3861437 29.8289144,74.1924313 29.7032611,73.9830092 C29.0121685,72.8311881 28.3315571,71.5537329 27.6614066,70.1506053 C26.9912561,68.7474777 26.446767,67.375784 26.027923,66.0354831 C25.9860386,65.9307721 25.991274,65.8103562 26.0436295,65.6742319 C26.095985,65.5381076 26.1745171,65.4491046 26.2792281,65.4072201 C26.4886502,65.3025091 26.7608947,65.2920382 27.09597,65.375807 C27.3472764,65.480518 27.5985791,65.668995 27.8498855,65.9412436 C28.1011919,66.2134923 28.3001399,66.4962078 28.4467353,66.7893986 C28.5723885,67.0825894 28.7189817,67.4176597 28.8865193,67.7946193 C29.054057,68.171579 29.2372985,68.5747103 29.4362494,69.0040255 C29.6352003,69.4333406 29.8393837,69.8574139 30.0488058,70.2762579 C30.2582278,70.695102 30.4676467,71.0720559 30.6770687,71.4071312 C31.0330861,70.7788651 31.4152756,70.1034892 31.8236486,69.3809832 C32.2320215,68.6584772 32.6456238,67.9255111 33.0644679,67.1820629 C33.4833119,66.4386147 33.9073852,65.7213551 34.3367003,65.0302624 C34.7660155,64.3391697 35.1900887,63.721384 35.6089328,63.1768867 C35.7136438,63.0302913 35.860237,62.9465237 36.0487168,62.9255815 C36.2371966,62.9046393 36.4466155,62.977936 36.6769797,63.1454736 C37.2005348,63.5433754 37.3680699,63.9831551 37.1795901,64.4648257 Z M46.8862525,68.4857085 C46.0695066,68.9673792 45.1899473,69.3390977 44.2475481,69.6008752 C43.305149,69.8626528 42.2894674,69.9935396 41.2004729,69.9935396 C41.2423573,70.7265167 41.4517762,71.3076541 41.8287358,71.7369692 C42.2056955,72.1662844 42.676888,72.4228225 43.2423274,72.5065913 C43.5774027,72.5484757 43.9177084,72.5380048 44.2632547,72.4751782 C44.6088011,72.4123516 44.9334003,72.3128776 45.2370623,72.1767533 C45.5407242,72.040629 45.8182042,71.8888003 46.0695107,71.7212627 C46.3208171,71.553725 46.5407069,71.3861899 46.7291867,71.2186523 C46.9176666,71.0511147 47.1166145,70.9411698 47.3260365,70.8888143 C47.5354586,70.8364588 47.6925227,70.8312233 47.7972337,70.8731077 C48.0904246,70.9778187 48.195134,71.291947 48.1113652,71.8155021 C47.77629,72.4856526 47.2946265,73.056319 46.6663604,73.5275186 C46.0380944,73.9987182 45.3365411,74.2971401 44.5616796,74.4227933 C43.8915291,74.5484465 43.2004468,74.5170337 42.4884119,74.3285538 C41.776377,74.140074 41.1376494,73.773591 40.57221,73.2290937 C40.0905393,72.747423 39.7240562,72.1819921 39.4727498,71.5327838 C39.2214434,70.8835755 39.0643792,70.2134351 39.0015526,69.5223424 C38.938726,68.8731341 38.9963162,68.2553484 39.1743249,67.6689667 C39.3523336,67.082585 39.6298137,66.5642733 40.0067733,66.1140159 C40.383733,65.6637586 40.8549255,65.2920401 41.4203649,64.9988492 C41.9858044,64.7056584 42.6454739,64.5381233 43.3993932,64.4962389 C44.2999079,64.4334123 45.1166415,64.6009474 45.8496186,64.9988492 C46.5825957,65.3967511 47.095672,65.9517111 47.3888628,66.663746 C47.5564004,67.0616479 47.6035197,67.407189 47.530222,67.7003799 C47.4569243,67.9935707 47.2422699,68.2553443 46.8862525,68.4857085 Z M43.2737406,66.3496146 C43.0643186,66.391499 42.8391933,66.4647956 42.5983579,66.5695066 C42.3575226,66.6742176 42.1376328,66.8051044 41.9386818,66.9621709 C41.7397309,67.1192374 41.5617249,67.2972435 41.4046583,67.4961944 C41.2475918,67.6951453 41.1585888,67.9202706 41.1376466,68.1715771 C41.493664,68.1715771 41.8863245,68.1401642 42.3156396,68.0773376 C42.7449548,68.014511 43.1637925,67.9359789 43.5721655,67.841739 C43.9805384,67.7474991 44.3574924,67.6375542 44.7030388,67.511901 C45.0485851,67.3862478 45.3365361,67.2501255 45.5669003,67.1035301 C45.3993627,66.7056282 45.0904698,66.459561 44.6402125,66.3653211 C44.1899551,66.2710812 43.734469,66.2658457 43.2737406,66.3496146 Z M59.7028164,65.0302624 C59.3258567,65.2396844 58.9331963,65.4595742 58.5248234,65.6899385 C58.1164504,65.9203027 57.7080836,66.1873118 57.2997106,66.4909737 C56.8913377,66.7946356 56.5039128,67.1506478 56.1374242,67.5590207 C55.7709357,67.9673937 55.4411009,68.4542926 55.1479101,69.019732 C54.729066,69.8155357 54.4463505,70.6270339 54.2997551,71.4542509 C54.1531597,72.2814679 54.0589212,73.0929661 54.0170368,73.8887698 C54.0170368,74.2657294 53.9280338,74.6479189 53.7500251,75.0353497 C53.5720163,75.4227804 53.3259491,75.6164929 53.0118161,75.6164929 C52.6139143,75.6164929 52.2945505,75.4123095 52.0537151,75.0039365 C51.8128798,74.5955636 51.6505802,74.2029031 51.5668113,73.8259435 C51.2107939,72.3390471 50.9176075,70.8678794 50.6872432,69.4123964 C50.456879,67.9569133 50.2579311,66.5066875 50.0903934,65.0616755 C50.0903934,64.7684847 50.1793965,64.5800077 50.3574052,64.4962389 C50.5354139,64.4124701 50.7395973,64.3810572 50.9699616,64.4019994 C51.221268,64.4229416 51.4620997,64.4857673 51.6924639,64.5904783 C51.9228282,64.6951893 52.0589504,64.8627244 52.1008348,65.0930887 C52.1846037,65.8679502 52.2893131,66.6794484 52.4149663,67.5276076 C52.5406195,68.3757668 52.6662709,69.1034974 52.7919241,69.7108213 C52.8756929,68.9987864 53.1060537,68.3077041 53.4830133,67.6375536 C53.859973,66.9674031 54.32593,66.3600883 54.8808983,65.8155911 C55.4358667,65.2710938 56.0641234,64.8103722 56.7656872,64.4334126 C57.4672509,64.0564529 58.1845106,63.8051503 58.9174877,63.6794971 C59.2316207,63.6376127 59.4933944,63.6376127 59.7028164,63.6794971 C59.9122384,63.7213815 60.0588316,63.7946781 60.1426004,63.8993891 C60.2263692,64.0041001 60.2420757,64.1716352 60.1897202,64.4019994 C60.1373647,64.6323637 59.975065,64.8417826 59.7028164,65.0302624 Z M67.4618637,66.4752671 C67.4199792,66.2449029 67.3780955,66.0250131 67.3362111,65.8155911 C67.2943267,65.606169 67.1896172,65.4700468 67.0220796,65.4072201 C66.6660622,65.3025091 66.2891082,65.2920382 65.8912063,65.375807 C65.4933045,65.4595758 65.1268214,65.5904626 64.7917462,65.7684713 C64.4566709,65.9464801 64.1739554,66.145428 63.9435912,66.3653211 C63.713227,66.5852143 63.5875756,66.7789267 63.5666334,66.9464643 C63.5038068,67.2605974 63.5875744,67.5642548 63.8179386,67.8574456 C64.0483028,68.1506364 64.3833731,68.4438229 64.8231593,68.7370137 C65.5561364,69.1768 66.3205153,69.6270506 67.116319,70.087779 C67.9121227,70.5485075 68.5822632,71.0197 69.1267604,71.5013706 C69.6712577,71.9830413 70.0429762,72.511824 70.2419271,73.0877345 C70.4408781,73.6636451 70.3937588,74.3180791 70.100568,75.0510562 C69.8702038,75.6164957 69.440895,76.0772172 68.812629,76.4332347 C68.1843629,76.7892521 67.4932806,77.0667322 66.7393613,77.2656831 C65.985442,77.464634 65.231534,77.6007563 64.4776147,77.674054 C63.7236954,77.7473517 63.0849678,77.784 62.5614127,77.784 C62.4357595,77.784 62.2839308,77.7368808 62.1059221,77.6426408 C61.9279134,77.5484009 61.7603783,77.438456 61.6033118,77.3128028 C61.4462452,77.1871496 61.310123,77.0562628 61.1949409,76.9201385 C61.0797587,76.7840141 61.0221685,76.6635983 61.0221685,76.5588873 C61.0221685,76.1819276 61.1897037,75.920154 61.5247789,75.7735586 C61.8598541,75.6269632 62.2053953,75.5536666 62.5614127,75.5536666 C63.0640256,75.5536666 63.6032792,75.5274892 64.1791898,75.4751337 C64.7551004,75.4227782 65.3048249,75.3390106 65.82838,75.2238285 C66.3519351,75.1086464 66.8231276,74.9568177 67.2419716,74.7683379 C67.6608157,74.5798581 67.9540021,74.3390264 68.1215397,74.0458355 C68.2681352,73.7945291 68.1791321,73.4961072 67.854528,73.1505608 C67.5299238,72.8050145 67.1006151,72.4437669 66.566589,72.0668073 C66.0325628,71.6898476 65.4566609,71.3233646 64.8388659,70.9673471 C64.2210709,70.6113297 63.6922882,70.2867304 63.252502,69.9935396 C62.8127157,69.7003487 62.4357617,69.3495721 62.1216287,68.9411992 C61.8074956,68.5328262 61.6085477,68.0249854 61.5247789,67.4176615 C61.5038367,66.8731643 61.6190171,66.3496171 61.8703235,65.8470042 C62.1216299,65.3443913 62.4514647,64.8993762 62.8598376,64.5119455 C63.2682106,64.1245147 63.7341676,63.8156219 64.2577227,63.5852576 C64.7812777,63.3548934 65.3048249,63.239713 65.82838,63.239713 C66.7288947,63.2815974 67.4723318,63.5276646 68.0587134,63.977922 C68.6450951,64.4281793 68.9906363,65.0930843 69.0953473,65.9726568 C69.0953473,66.2658476 69.048228,66.5066793 68.9539881,66.6951592 C68.8597482,66.883639 68.6974486,66.9988194 68.4670843,67.0407038 C68.1738935,67.0825882 67.9382973,67.0459399 67.7602885,66.9307578 C67.5822798,66.8155757 67.4828059,66.663747 67.4618637,66.4752671 Z M77.5140706,63.0512341 C77.4721862,63.2606562 77.325593,63.3758365 77.0742866,63.3967787 C76.8229802,63.417721 76.6135613,63.4281919 76.4460236,63.4281919 C75.9224686,63.4491341 75.383215,63.5014888 74.8282466,63.5852576 C74.2732782,63.6690264 73.6921408,63.7946778 73.0848169,63.9622154 C72.8335105,64.0459842 72.561266,64.0145714 72.2680751,63.867976 C71.9748843,63.7213805 71.7968782,63.4281941 71.7340516,62.9884078 C71.7340516,62.8208702 71.7968773,62.6847479 71.9225305,62.5800369 C72.0481837,62.4753259 72.1947769,62.3810874 72.3623146,62.2973186 C72.6345632,62.1716654 72.9591625,62.0617205 73.3361221,61.9674806 C73.7130818,61.8732407 74.0952712,61.8051795 74.482702,61.7632951 C74.8701327,61.7214107 75.2418512,61.7057043 75.5978687,61.7161754 C75.9538861,61.7266465 76.2470726,61.7632948 76.4774368,61.8261214 C76.812512,61.9308324 77.0795211,62.0878966 77.278472,62.2973186 C77.477423,62.5067406 77.555955,62.7580433 77.5140706,63.0512341 Z M76.7915683,73.511812 C76.9381637,73.8468873 77.0166958,74.2081348 77.0271669,74.5955656 C77.037638,74.9829963 76.927693,75.2500054 76.6973288,75.3966008 C76.404138,75.5850807 76.0900097,75.5746097 75.7549344,75.3651877 C75.4198592,75.1557657 75.1685565,74.8730502 75.0010189,74.5170327 C74.7706547,74.0772465 74.5926486,73.5379928 74.4669954,72.8992557 C74.3413422,72.2605185 74.2471037,71.6270264 74.1842771,70.9987603 C74.1214505,70.3704942 74.0848022,69.7841213 74.0743311,69.2396241 C74.06386,68.6951268 74.0586245,68.28676 74.0586245,68.0145113 C74.0795667,67.7213205 74.1633342,67.4490759 74.3099297,67.1977695 C74.4565251,66.9464631 74.6450021,66.7998699 74.8753663,66.7579855 C75.252326,66.7789277 75.5559833,66.9516982 75.7863476,67.2763024 C76.0167118,67.6009065 76.1214212,68.0040379 76.100479,68.4857085 C76.100479,68.8626682 76.11095,69.281506 76.1318922,69.7422344 C76.1528344,70.2029629 76.1947182,70.6636844 76.2575448,71.1244129 C76.3203714,71.5851413 76.393668,72.0301565 76.4774368,72.4594716 C76.5612056,72.8887868 76.665915,73.2395634 76.7915683,73.511812 Z M87.0636673,64.9046098 C87.6919334,65.134974 88.220716,65.4805152 88.6500312,65.9412436 C89.0793463,66.4019721 89.4091811,66.9202838 89.6395453,67.4961944 C89.8699095,68.072105 90.0007964,68.6637133 90.0322097,69.2710372 C90.063623,69.8783611 89.9955618,70.4437921 89.8280242,70.9673471 C89.59766,71.5537288 89.3044735,72.1296307 88.9484561,72.6950702 C88.5924386,73.2605097 88.1840718,73.763115 87.7233434,74.2029013 C87.2626149,74.6426875 86.7390677,74.9986996 86.152686,75.2709483 C85.5663043,75.5431969 84.9171058,75.6793192 84.2050709,75.6793192 C83.3464406,75.6793192 82.6239455,75.4803712 82.0375638,75.0824694 C81.4511821,74.6845675 80.9904606,74.1714913 80.6553853,73.5432252 C80.3203101,72.9149591 80.1056557,72.2029349 80.0114158,71.4071312 C79.9171759,70.6113275 79.9328823,69.8155357 80.0585355,69.019732 C80.1423043,68.4333504 80.2836621,67.8626839 80.482613,67.3077155 C80.6815639,66.7527472 80.9381021,66.2606128 81.2522351,65.8312976 C81.5663682,65.4019825 81.9276157,65.0512058 82.3359887,64.7789572 C82.7443616,64.5067086 83.2103186,64.3705863 83.7338737,64.3705863 C84.0270645,64.3705863 84.3935476,64.4281765 84.8333339,64.5433586 C85.2731201,64.6585407 85.6814869,64.8208404 86.0584466,65.0302624 C86.3306952,64.778956 86.6657654,64.7370722 87.0636673,64.9046098 Z M85.8699677,67.1977695 C85.6396035,67.0511741 85.3725944,66.8574616 85.0689325,66.6166263 C84.7652705,66.375791 84.4982614,66.2553751 84.2678972,66.2553751 C84.0165908,66.2553751 83.7705236,66.3705555 83.5296883,66.6009197 C83.2888529,66.831284 83.079434,67.098293 82.9014253,67.401955 C82.7234166,67.7056169 82.5715879,68.0145098 82.4459347,68.3286428 C82.3202815,68.6427758 82.2365139,68.8940785 82.1946295,69.0825583 C82.1318029,69.3966914 82.0899191,69.7736454 82.0689769,70.2134316 C82.0480347,70.6532179 82.0794476,71.0877621 82.1632164,71.5170772 C82.2469852,71.9463924 82.4092848,72.3338173 82.6501201,72.6793636 C82.8909555,73.02491 83.2522031,73.2709772 83.7338737,73.4175726 C84.0270645,73.5013414 84.3726057,73.4961059 84.7705076,73.401866 C85.1684094,73.3076261 85.5610698,73.1348555 85.9485006,72.8835491 C86.3359313,72.6322427 86.7024144,72.2971724 87.0479607,71.8783284 C87.393507,71.4594843 87.6605161,70.9778209 87.8489959,70.4333236 C88.058418,69.8259998 88.0636534,69.1925076 87.8647025,68.5328283 C87.6657516,67.8731489 87.2626202,67.3967209 86.6552964,67.1035301 C86.508701,67.2082411 86.3621077,67.2605958 86.2155123,67.2605958 C86.0689169,67.2605958 85.9537365,67.2396539 85.8699677,67.1977695 Z M94.5399962,65.5014596 C94.6028228,65.8155926 94.670884,66.1663693 94.7441817,66.5538 C94.8174794,66.9412308 94.8960115,67.3391266 94.9797803,67.7474996 C95.0635491,68.1558725 95.1368457,68.5694748 95.1996723,68.9883189 C95.2624989,69.4071629 95.3148536,69.8050588 95.356738,70.1820185 C95.6080445,69.6375212 95.880289,69.0616193 96.1734799,68.4542954 C96.4666707,67.8469715 96.7860345,67.286776 97.1315808,66.773692 C97.4771272,66.2606081 97.8436102,65.8365348 98.231041,65.5014596 C98.6184717,65.1663843 99.042545,64.9988492 99.5032734,64.9988492 C100.194366,64.9988492 100.775504,65.2501519 101.246703,65.7527648 C101.717903,66.2553776 102.115799,66.8783988 102.440403,67.621847 C102.765007,68.3652952 103.021545,69.1453805 103.210025,69.9621264 C103.398505,70.7788723 103.555569,71.5013675 103.681222,72.1296336 C103.806875,72.695073 103.555573,73.1139108 102.927306,73.3861594 C102.634116,73.5327549 102.414226,73.5536967 102.26763,73.4489857 C102.121035,73.3442747 102.037267,73.2395653 102.016325,73.1348543 C101.911614,72.8835478 101.780727,72.4437682 101.623661,71.8155021 C101.466594,71.187236 101.288588,70.5485084 101.089637,69.8993001 C100.890686,69.2500919 100.665561,68.6846609 100.414255,68.2029902 C100.162948,67.7213196 99.8802328,67.5014297 99.5660997,67.5433141 C99.1891401,67.5642563 98.8540699,67.8469718 98.560879,68.3914691 C98.3095726,68.8312553 98.0530345,69.3181543 97.7912569,69.8521804 C97.5294794,70.3862066 97.2729413,70.9306957 97.0216348,71.4856641 C96.7703284,72.0406324 96.5242612,72.5955925 96.2834259,73.1505608 C96.0425905,73.7055292 95.8174652,74.21337 95.6080432,74.6740985 C95.4614478,74.8206939 95.2782063,74.9201679 95.0583131,74.9725234 C94.83842,75.0248789 94.6132947,75.0091724 94.3829305,74.9254036 C94.1735085,74.862577 94.0059734,74.7578676 93.8803201,74.6112722 C93.7546669,74.4646768 93.6918413,74.3180835 93.6918413,74.1714881 C93.5033614,72.5379963 93.309649,71.0511222 93.110698,69.7108213 C92.9117471,68.3705203 92.655209,66.9988266 92.3410759,65.595699 C92.1944805,65.1140284 92.1683032,64.7318389 92.2625431,64.4491192 C92.356783,64.1663994 92.6656758,64.0564545 93.1892309,64.1192811 C93.922208,64.2449343 94.3724586,64.7056559 94.5399962,65.5014596 Z M121.492476,63.8051497 C121.764725,64.6847222 121.754254,65.5119268 121.461063,66.2867883 C121.293525,66.7056323 121.073636,67.1663539 120.801387,67.6689667 C120.529138,68.1715796 120.225481,68.6794204 119.890406,69.1925043 C119.55533,69.7055883 119.209789,70.1977227 118.853772,70.6689222 C118.497754,71.1401218 118.173155,71.564195 117.879964,71.9411547 C118.256924,71.8992703 118.722881,71.8416801 119.277849,71.7683824 C119.832818,71.6950847 120.40872,71.6165526 121.005572,71.5327838 C121.602425,71.449015 122.188798,71.3704829 122.764709,71.2971852 C123.340619,71.2238875 123.858931,71.1662973 124.319659,71.1244129 C124.550024,71.1034707 124.817033,71.1244126 125.120695,71.1872392 C125.424357,71.2500658 125.62854,71.3024205 125.733251,71.3443049 C125.858904,71.4071315 125.906024,71.5170764 125.87461,71.6741429 C125.843197,71.8312095 125.775136,71.9935091 125.670425,72.1610467 C125.565714,72.3285843 125.445298,72.480413 125.309174,72.6165373 C125.173049,72.7526617 125.063104,72.8207228 124.979336,72.8207228 C124.309185,72.9254338 123.570983,73.0406142 122.764709,73.1662674 C121.958434,73.2919206 121.146936,73.417572 120.33019,73.5432252 C119.513444,73.6688784 118.712417,73.7892943 117.927084,73.9044764 C117.141751,74.0196585 116.434963,74.1086615 115.806697,74.1714881 C115.513506,74.2133725 115.267439,74.0981921 115.068488,73.8259435 C114.869537,73.5536949 114.749121,73.2709794 114.707236,72.9777885 C114.707236,72.9359041 114.717707,72.8626075 114.73865,72.7578965 C114.759592,72.6531855 114.885243,72.4856504 115.115607,72.2552862 C115.99518,71.2710026 116.859033,70.1872599 117.707192,69.0040255 C118.555351,67.820791 119.220256,66.6428098 119.701927,65.4700464 C119.764753,65.3025088 119.785695,65.1402092 119.764753,64.9831427 C119.743811,64.8260761 119.701927,64.7266022 119.639101,64.6847178 C119.53439,64.600949 119.403503,64.5538297 119.246436,64.5433586 C119.08937,64.5328875 118.906128,64.538123 118.696706,64.5590652 C118.403515,64.5800074 118.099858,64.6323621 117.785725,64.7161309 C117.471592,64.7998997 117.162699,64.8941382 116.859037,64.9988492 C116.555375,65.1035602 116.277895,65.2135052 116.026589,65.3286873 C115.775282,65.4438694 115.555392,65.5433434 115.366913,65.6271122 C115.115606,65.7527654 114.906187,65.8051201 114.73865,65.7841779 C114.571112,65.7632357 114.429754,65.7161165 114.314572,65.6428187 C114.19939,65.569521 114.110387,65.490989 114.04756,65.4072201 C113.984734,65.3234513 113.953321,65.2606257 113.953321,65.2187413 C113.932379,65.1140303 113.94285,64.977908 113.984734,64.8103704 C114.026619,64.6428327 114.068502,64.5067105 114.110387,64.4019994 C114.298867,64.1716352 114.597288,63.9308035 115.005661,63.6794971 C115.414034,63.4281906 115.885227,63.2135363 116.419253,63.0355276 C116.953279,62.8575188 117.51871,62.726632 118.115563,62.6428632 C118.712416,62.5590944 119.314495,62.5590944 119.921819,62.6428632 C120.319721,62.7475742 120.649555,62.9046384 120.911333,63.1140604 C121.173111,63.3234825 121.366823,63.5538432 121.492476,63.8051497 Z M129.345763,75.3651877 C129.450474,76.119107 129.136346,76.5484157 128.403369,76.6531267 C128.026409,76.6950111 127.717516,76.5903017 127.476681,76.3389952 C127.235845,76.0876888 127.084017,75.7840314 127.02119,75.428014 C126.958363,75.0510543 126.984541,74.6845713 127.099723,74.3285538 C127.214905,73.9725364 127.44003,73.7735885 127.775106,73.7317041 C128.19395,73.6688774 128.549962,73.8207061 128.843153,74.1871947 C129.136343,74.5536832 129.303879,74.9463436 129.345763,75.3651877 Z M139.30373,59.595788 C138.989597,60.014632 138.638821,60.5591211 138.25139,61.2292716 C137.863959,61.8994221 137.487005,62.6533301 137.120517,63.4910182 C136.754028,64.3287063 136.413723,65.2187366 136.099589,66.1611357 C135.785456,67.1035348 135.54986,68.0406843 135.392794,68.9726123 C135.235727,69.9045403 135.172902,70.8050415 135.204315,71.6741429 C135.235728,72.5432443 135.408499,73.3233297 135.722632,74.0144224 C135.743574,74.0981912 135.795929,74.140075 135.879697,74.140075 C136.214773,74.0144218 136.555078,73.7578836 136.900625,73.3704529 C137.246171,72.9830221 137.544593,72.5432425 137.795899,72.0511007 C138.047206,71.5589589 138.235683,71.0563536 138.361336,70.5432697 C138.486989,70.0301857 138.507931,69.5956415 138.424162,69.2396241 C138.382278,69.0511442 138.24092,68.9202574 138.000085,68.8469597 C137.75925,68.773662 137.513182,68.7003654 137.261876,68.6270677 C137.010569,68.55377 136.801151,68.464767 136.633613,68.3600559 C136.466075,68.2553449 136.445133,68.0773389 136.570787,67.8260325 C136.612671,67.784148 136.685968,67.7265579 136.790679,67.6532601 C136.89539,67.5799624 137.031512,67.5119013 137.19905,67.4490747 C137.366587,67.3862481 137.555064,67.3443643 137.764486,67.3234221 C137.973908,67.3024799 138.204269,67.3129508 138.455576,67.3548352 C138.748766,67.3967197 139.031482,67.522371 139.30373,67.731793 C139.575979,67.941215 139.764456,68.2867562 139.869167,68.7684269 C140.036705,69.4385773 140.068118,70.1191887 139.963407,70.8102814 C139.858696,71.5013741 139.649277,72.1610436 139.335144,72.7893097 C139.021011,73.4175757 138.623115,73.9987131 138.141444,74.5327393 C137.659773,75.0667655 137.136226,75.5013097 136.570787,75.8363849 C136.31948,75.9829803 136.057707,76.0562769 135.785458,76.0562769 C135.157192,75.9306237 134.659822,75.6374373 134.293334,75.1767088 C133.926845,74.7159804 133.659836,74.1871977 133.492298,73.5903449 C133.324761,72.9934921 133.235758,72.3652355 133.225287,71.7055561 C133.214815,71.0458767 133.230522,70.4542684 133.272406,69.9307133 C133.439944,67.8574352 133.937314,65.8417785 134.764531,63.8836825 C135.591748,61.9255866 136.66502,60.0984068 137.984378,58.4020884 C138.151916,58.1717242 138.340393,58.0408374 138.549815,58.0094241 C138.759237,57.9780108 138.947714,58.02513 139.115252,58.1507832 C139.261847,58.2554942 139.377027,58.4387358 139.460796,58.7005133 C139.544565,58.9622908 139.49221,59.2607127 139.30373,59.595788 Z"
                id="version-2.6"
                fill="#2E8B57"
              />
            </g>
          </svg>
        </div>
      </article>
    )
  }
}

export default withRouter(Loading)

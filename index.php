
<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon"  type="image/png" href="logo3.jpg">
    <title>Orbit</title>

    <link rel="stylesheet" href="style.css">
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css"
    rel="stylesheet"
/>
<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css"
    rel="stylesheet"
/>
</head>
<body>
    <header>
        <div class="menu_side">
            <h1>Playlist</h1>
            <div class="playlist">
                <h4  class="active"><span></span><i class="ri-music-2-fill"></i>Playlist</h4>
                <h4><span></span><i class="ri-music-2-fill"></i>Last Listening</h4>
                <h4><span></span><i class="ri-music-2-fill"></i>Recommended</h4>
            </div>
            <div class="menu_song">
                <li class="songItem">
                    <span>01</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="1"></i>
                </li>
                <li class="songItem">
                    <span>02</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="2"></i>
                </li>
                <li class="songItem">
                    <span>03</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="3"></i>
                </li>
                <li class="songItem">
                    <span>04</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="4"></i>
                </li>
                <li class="songItem">
                    <span>05</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="5"></i>
                </li>
                <li class="songItem">
                    <span>06</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="6"></i>
                </li>
                <li class="songItem">
                    <span>07</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="7"></i>
                </li>
                <li class="songItem">
                    <span>08</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="8"></i>
                </li>
                <li class="songItem">
                    <span>09</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="9"></i>
                </li>
                <li class="songItem">
                    <span>10</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="10"></i>
                </li>
                <li class="songItem">
                    <span>11</span>
                    <img src="" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>
                    <i class=" playListPlay ri-play-circle-fill" id="11"></i>
                </li>
            </div>
        </div>


         <div class="song_side">
            <nav>
                <ul>
                    <li>DISCOVER <span></span></li>
                    <li>MY LIBRARY</li>
                    <li>RADIO</li>
                </ul>
               <div class="search">
    <i class="ri-search-line"></i>
    <input type="text" placeholder="Search Music" id="search_input">

    <div class="search_results"></div>
</div>

                <div class="user">
    <h5>
        Welcome, <?php echo $_SESSION['user']; ?> 👋
    </h5>
    
</div>
            <a href="logout.php" class="logout_btn">Logout</a>
            </nav>
            <div class="content">
                <h1> Alen Walker-Fade</h1>
                <p>You were the win shadow to my light did you feel us Another start you fade <br> Away afraid our aim is out of sight Wanna see us Alive</p>
                <div class="buttons">
                    <button>Play</button>
                    <button>FOLLOW</button>
                </div>
            </div>

            <div class="popular_song">
                <div class="h4">
                    <h4>Popular Song</h4>
                    <div class="btn_s">
                        <i class="ri-arrow-left-line" id="pop_song_left" ></i>
                        <i class="ri-arrow-right-line" id="pop_song_right"></i>
                    </div>
                </div>
                <div class="pop_song">
                   <li class="songItem">
                    <div class="img_play">
                        <img src="" alt="">
                        <i class=" playListPlay ri-play-circle-fill" id="12"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>   
                </li>
                 <li class="songItem">
                    <div class="img_play">
                        <img src="" alt="">
                        <i class=" playListPlay ri-play-circle-fill" id="13"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>   
                </li>
                 <li class="songItem">
                    <div class="img_play">
                        <img src="" alt="">
                        <i class=" playListPlay ri-play-circle-fill" id="14"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>   
                </li>
                 <li class="songItem">
                    <div class="img_play">
                        <img src="" alt="">
                        <i class=" playListPlay ri-play-circle-fill" id="15"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>   
                </li>
                 <li class="songItem">
                    <div class="img_play">
                        <img src="" alt="">
                        <i class=" playListPlay ri-play-circle-fill" id="16"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>   
                </li>
                 <li class="songItem">
                    <div class="img_play">
                        <img src="" alt="">
                        <i class=" playListPlay ri-play-circle-fill" id="17"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>   
                </li>
                 <li class="songItem">
                    <div class="img_play">
                        <img src="" alt="">
                        <i class=" playListPlay ri-play-circle-fill" id="18"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>   
                </li>
                 <li class="songItem">
                    <div class="img_play">
                        <img src="" alt="">
                        <i class=" playListPlay ri-play-circle-fill" id="19"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>   
                </li>
                 <li class="songItem">
                    <div class="img_play">
                        <img src="" alt="">
                        <i class=" playListPlay ri-play-circle-fill" id="20"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>   
                </li>
                 <li class="songItem">
                    <div class="img_play">
                        <img src="" alt="">
                        <i class=" playListPlay ri-play-circle-fill" id="21"></i>
                    </div>
                    <h5>On My Way <br>
                        <div class="subtitle">Alen Walker</div>
                    </h5>   
                </li>
                </div>
            </div>
            <div class="popular_artists">
                <div class="h4">
                    <h4>Popular Artists</h4>
                    <div class="btn_s">
                        <i class="ri-arrow-left-line" id="pop_art_left"></i>
                        <i class="ri-arrow-right-line" id="pop_art_right"></i>
                    </div>
            </div>
            <div class="item Artist_box">
                   <li>
                    <img src="./artist/arjit.jpg" alt="">
                   </li>
                   <li>
                    <img src="./artist/anuv.jpg" alt="">
                   </li>
                   <li>
                    <img src="./artist/arRahman.jpg" alt="">
                   </li>
                   <li>
                    <img src="./artist/atif.jpg" alt="">
                   </li>
                   <li>
                    <img src="./artist/farhanakhtar.jpg" alt="">
                   </li>
                   <li>
                    <img src="./artist/jubinNautiyal.jpg" alt="">
                   </li>
                   <li>
                    <img src="./artist/kaavish.jpg" alt="">
                   </li>
                   <li>
                    <img src="./artist/kher.jpg" alt="">
                   </li>
                   <li>
                    <img src="./artist/kk.jpg" alt="">
                   </li>
                   <li>
                    <img src="./artist/papon.jpg" alt="">
                   </li>
                   <li>
                    <img src="./artist/sonunigam.jpg" alt="">
                   </li>
            
            </div>
         </div>
    </div>
        

          <div class="master_play">
             <div class="wave" id="wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
             </div>
             <img src="./img/12.jpg" alt="" id="poster_master_play">
             <h5 id="title">Vande mataram
                <div class="subtitle">Bankim Chandra</div>
             </h5>
             <div class="icon">
                <i id="shuffle" class=" shuffle ri-music-2-fill">Next</i>
                <i class="ri-skip-back-fill" id="back"></i>
                <i class="ri-play-large-fill" id="masterPlay" ></i>
                <i class="ri-skip-forward-fill" id="next"></i>
                <a href="" download download_music id="download_music"><i class="ri-download-cloud-fill"></i></a>
             </div>
             <span id="currentStart">0.00</span>
             <div class="bar"> <input type="range"  id="seek" min="0" max="100">
             <div class="bar2" id="bar2"></div>
             <div class="dot" id="dot"></div>
             </div>
             <span id="currentEnd">0.30</span>
             <div class="vol">
                <i id="vol_icon" class="ri-volume-up-fill"></i>
                <input type="range" min="0" max="100" id="vol">
                <div class="vol_bar" id="bar2"></div>
                <div class="vol_dot" id="vol_dot"></div>
             </div>
          
    </header>
             <script src="./app.js"></script>
</body>
</html>
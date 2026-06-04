
const music =new Audio('audio/1.mp3');
// music.play();

const songs = [
  {
    id: 1,
    songName: `Kesariya <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: `Tum Hi Ho <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: `Raataan Lambiyan <br><div class="subtitle">Jubin Nautiyal (Style)</div>`,
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: `Pasoori <br><div class="subtitle">Ali Sethi (Style)</div>`,
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: `Chaleya <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/5.jpg",
    
  },
  {
    id: 6,
    songName: `Heeriye <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/6.jpg",
  },
  {
    id: 7,
    songName: `Apna Bana Le <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/7.jpg",
  },
  {
    id: 8,
    songName: `O Bedardeya <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/8.jpg",
  },
  {
    id: 9,
    songName: `Jo Pathaan <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/9.jpg",
  },
  {
    id: 10,
    songName: `Malang Sajna <br><div class="subtitle">Sachet–Parampara (Style)</div>`,
    poster: "img/10.jpg",
  },
  {
    id: 11,
    songName: `Shayad <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/11.jpg",
  },
  {
    id: 12,
    songName: `Khairiyat <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/12.jpg",
  },
  {
    id: 13,
    songName: `Kalank <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/13.jpg",
  },
  {
    id: 14,
    songName: `Hawayein <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/14.jpg",
  },
  {
    id: 15,
    songName: `Bekhayali <br><div class="subtitle">Sachet Tandon (Style)</div>`,
    poster: "img/15.jpg",
  },
  {
    id: 16,
    songName: `Dil Diyan Gallan <br><div class="subtitle">Atif Aslam (Style)</div>`,
    poster: "img/16.jpg",
  },
  {
    id: 17,
    songName: `Agar Tum Saath Ho <br><div class="subtitle">Arijit–Alka (Style)</div>`,
    poster: "img/17.jpg",
  },
  {
    id: 18,
    songName: `Tera Yaar Hoon Main <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/18.jpg",
  },
  {
    id: 19,
    songName: `Ghungroo <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/19.jpg",
  },
  {
    id: 20,
    songName: `What Jhumka <br><div class="subtitle">Arijit Singh (Style)</div>`,
    poster: "img/20.jpg",
  },
  {
    id: 21,
    songName: `Jai Ho <br><div class="subtitle">A. R. Rahman (Style)</div>`,
    poster: "img/21.jpg",
  }
];


const search_input = document.getElementById('search_input');
const search_results = document.querySelector('.search_results');

search_input.addEventListener('keyup', () => {

    let search_value = search_input.value.toLowerCase();

    search_results.innerHTML = "";

    search_results.style.display = "block";

    if(search_value == ""){
        search_results.style.display = "none";
        return;
    }

    let filtered_songs = songs.filter((song) => {
        return song.songName.toLowerCase().includes(search_value);
    });

    if(filtered_songs.length > 0){
        search_results.style.display = "block";
    } else {
        search_results.style.display = "none";
    }

    filtered_songs.forEach(song => {

        let card = document.createElement('a');

        card.classList.add('card');

       card.href = "javascript:void(0)";

        card.innerHTML = `
            <img src="${song.poster}">
            
            <div class="content">
                <h5>${song.songName}</h5>
            </div>
        `;


 card.addEventListener('click', () => {

    index = song.id;

    music.src = `audio/${song.id}.mp3`;

    poster_master_play.src = `img/${song.id}.jpg`;

    music.play();

    masterPlay.classList.remove('ri-play-large-fill');
    masterPlay.classList.add('ri-pause-fill');

    title.innerHTML = song.songName;

    wave.classList.add('active1');

    document.getElementById('search_input').value = "";

    search_results.innerHTML = "";

    search_results.style.display = "none";

});

        search_results.appendChild(card);

    });

});

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay =document.getElementById('masterPlay');
let wave =document.getElementById('wave');

masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add('active1');

    masterPlay.classList.remove('ri-play-large-fill');
    masterPlay.classList.add('ri-pause-fill');
  } else {
    music.pause();
    wave.classList.remove('active1');

    masterPlay.classList.add('ri-play-large-fill');
    masterPlay.classList.remove('ri-pause-fill');
  }
});
//
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('ri-play-circle-fill');
        el.classList.remove('ri-pause-circle-fill');
    })
}
//
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105,105,105, .0)';
    })
}



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        masterPlay.classList.remove('ri-play-large-fill');
        masterPlay.classList.add('ri-pause-fill');

        download_music.href = `audio/${index}.mp3`;       
        
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        })

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105, .1)"
        makeAllPlays();
        el.target.classList.add("ri-pause-circle-fill");
        el.target.classList.remove("ri-play-circle-fill");
        wave.classList.add('active1');
       });
    })


    let currentStart = document.getElementById('currentStart');
    let currentEnd = document.getElementById('currentEnd');
    let seek = document.getElementById('seek');
    let bar2 = document.getElementById('bar2');
    let dot = document.getElementById('dot');[0]

    music.addEventListener('timeupdate',()=>{
        let music_curr = music.currentTime;
        let music_dur = music.duration;
        // console.log(music_dur);

        let min1 = Math.floor(music_dur/60);
        let sec1 = Math.floor(music_dur%60);

        if(sec1 < 10){
            sec1 = `0${sec1}`;
        }
        currentEnd.innerText = `${min1}:${sec1}`;

        let min2 = Math.floor(music_curr / 60);
        let sec2 = Math.floor(music_curr % 60);

        if(sec2 < 10){
            sec2 = `0${sec2}`;
        }

        currentStart.innerText = `${min2}:${sec2}`;



        let progressBar = parseInt((music_curr / music_dur) * 100);
        seek.value = progressBar;
        // console.log(seek.value);
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left =`${seekbar}%`
        
        
    });

    seek.addEventListener('change',()=>{
        music.currentTime = seek.value * music.duration / 100;
    });

    let vol_icon = document.getElementById('vol_icon');
    let vol = document.getElementById('vol');
    let vol_bar = document.getElementsByClassName('vol_bar')[0];
    let vol_dot = document.getElementById('vol_dot');


    vol.addEventListener('change',()=>{
        if (vol.value == 0){
            vol_icon.classList.remove('ri-volume-up-fill');
            vol_icon.classList.remove('ri-volume-down-fill');
            vol_icon.classList.add('ri-volume-mute-fill');
        }
        if(vol.value > 0){
            vol_icon.classList.remove('ri-volume-up-fill');
            vol_icon.classList.add('ri-volume-down-fill');
            vol_icon.classList.remove('ri-volume-mute-fill');
        }
        if(vol.value > 50){
            vol_icon.classList.add('ri-volume-up-fill');
            vol_icon.classList.remove('ri-volume-down-fill');
            vol_icon.classList.remove('ri-volume-mute-fill');
        }
        let vol_a = vol.value;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;
        music.volume = vol_a / 100;
    });

    let back = document.getElementById('back')
    let next = document.getElementById('next')

    back.addEventListener('click',()=>{
        index -= 1;
        if(index < 1){
            index = Array.from(document.getElementsByClassName('songItem')).length
        }
         music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        masterPlay.classList.remove('ri-play-large-fill');
        masterPlay.classList.add('ri-pause-fill');
        
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        })

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105, .1)"
        makeAllPlays();
        el.target.classList.add("ri-pause-circle-fill");
        el.target.classList.remove("ri-play-circle-fill");
        wave.classList.add('active1');
    })

    next.addEventListener('click',()=>{
        index++;
         if(index > Array.from(document.getElementsByClassName('songItem')).length){
            index = 1;
        }
         music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        masterPlay.classList.remove('ri-play-large-fill');
        masterPlay.classList.add('ri-pause-fill');
        
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        })

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105, .1)"
        makeAllPlays();
        el.target.classList.add("ri-pause-circle-fill");
        el.target.classList.remove("ri-play-circle-fill");
        wave.classList.add('active1');

    });


    let shuffle = document.getElementById('shuffle');

    shuffle.addEventListener('click', ()=>{
        console.log("hello");
        
        let a = shuffle.innerHTML;

        switch (a) {
            case "Next":
                shuffle.classList.add('ri-repeat-fill');
                shuffle.classList.remove('ri-music-2-fill');
                shuffle.classList.remove('ri-shuffle-fill');
                shuffle.innerHTML = 'repeat';
                break;
        
          case "repeat":
                shuffle.classList.remove('ri-repeat-fill');
                shuffle.classList.remove('ri-music-2-fill');
                shuffle.classList.add('ri-shuffle-fill');
                shuffle.innerHTML = 'random';
                break;

            case "random":
                shuffle.classList.remove('ri-repeat-fill');
                shuffle.classList.add('ri-music-2-fill');
                shuffle.classList.remove('ri-shuffle-fill');
                shuffle.innerHTML = 'Next';
                break;
        }
    });

 
    const next_music = ()=>{
       if (index == songs.length) {
    index = 1;
} else {
    index ++;
}

        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        masterPlay.classList.remove('ri-play-large-fill');
        masterPlay.classList.add('ri-pause-fill');

        download_music.href = `audio/${index}.mp3`;       
        
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        })

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105, .1)"
        makeAllPlays();
        el.target.classList.add("ri-pause-circle-fill");
        el.target.classList.remove("ri-play-circle-fill");
        wave.classList.add('active1');
    }


        const repeat_music = ()=>{
        index;

        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        masterPlay.classList.remove('ri-play-large-fill');
        masterPlay.classList.add('ri-pause-fill');

        download_music.href = `audio/${index}.mp3`;       
        
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        })

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105, .1)"
        makeAllPlays();
        el.target.classList.add("ri-pause-circle-fill");
        el.target.classList.remove("ri-play-circle-fill");
        wave.classList.add('active1');
    }



     const random_music = ()=>{
        if (index == songs.length ) {
            index =1;
        } else {
            index = Math.floor(Math.random()* songs.length +1)
        }

        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        masterPlay.classList.remove('ri-play-large-fill');
        masterPlay.classList.add('ri-pause-fill');

        download_music.href = `audio/${index}.mp3`;       
        
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        })

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105, .1)"
        makeAllPlays();
        el.target.classList.add("ri-pause-circle-fill");
        el.target.classList.remove("ri-play-circle-fill");
        wave.classList.add('active1');
    }

       music.addEventListener('ended',()=>{
        let b =shuffle.innerHTML;

        switch (b) {
            case 'repeat':
                repeat_music();
                break;

            case 'Next':
                next_music();
                break;

            case 'random':
                random_music();
                break;
        
            
        }
    })





















let pop_song_left =document.getElementById('pop_song_left');
let pop_song_right =document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',function(){
    pop_song.scrollLeft += 330; 
})

pop_song_left.addEventListener('click',function(){
    pop_song.scrollLeft -= 330; 
})


let pop_art_left =document.getElementById('pop_art_left');
let pop_art_right =document.getElementById('pop_art_right');
let Artist_box = document.getElementsByClassName('Artist_box')[0];


pop_art_right.addEventListener('click',function(){
    Artist_box.scrollLeft += 330; 
})

pop_art_left.addEventListener('click',function(){
    Artist_box.scrollLeft -= 330; 
})


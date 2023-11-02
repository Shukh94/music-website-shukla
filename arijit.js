    
    const music = new Audio ('audio/arijit/1.mp3');
    // music.play();


    const songs = [

        {
            id: '1',
            songName: `Agar Tum Saath Ho <br> 
            <div class="subtitle">Tamasha</div>`,
            poster: "img/arijit/1.jpg"
        },
        {
            id: '2',
            songName: `Chhod diya<br> 
            <div class="subtitle">Bazaar</div>`,
            poster: "img/arijit/2.jpg"
        },
        {
            id: '3',
            songName: `khairiyat<br> 
            <div class="subtitle">Chichhore</div>`,
            poster: "img/arijit/3.jpg"
        },
        {
            id: '4',
            songName: `Tujhe kitna chahne lage<br> 
            <div class="subtitle">Kabir Singh</div>`,
            poster: "img/arijit/4.jpg"
        },
        {
            id: '5',
            songName: ` Humdard <br> 
            <div class="subtitle">Ek Villain</div>`,
            poster: "img/arijit/5.jpg"
        },
        {
            id: '6',
            songName: `Har kisiko nahi milta <br> 
            <div class="subtitle">Boss</div>`,
            poster: "img/arijit/6.jpg"
        },
        {
            id: '7',
            songName: `Kesariya <br> 
            <div class="subtitle">Brahmastra
            </div>`,
            poster: "img/arijit/7.jpg"
        },
        {
            id: '8',
            songName: `Thodi Jagah<br> 
            <div class="subtitle"> Marjaavaan
            </div>`,
            poster: "img/arijit/8.jpg"
        },
        {
            id: '9',
            songName: `phir bhi tumko chahunga <br> 
            <div class="subtitle">Half Girlfriend
            </div>`,
            poster: "img/arijit/9.jpg"
        },
        {
            id: '10',
            songName: `soch na sake<br> 
            <div class="subtitle">Air Lift</div>`,
            poster: "img/arijit/10.jpg"
        },
        {
            id: '11',
            songName: `Bolna Mahi bolna <br> 
            <div class="subtitle">Arijit Singh</div>`,
            poster: "img/arijit/11.jpg"
        },
        {
            id: '12',
            songName: `Aayat<br> 
            <div class="subtitle">Bajirao Mastani</div>`,
            poster: "img/arijit/12.jpg"
        },
        {
            id: '13',
            songName: `Laal Ishq<br> 
            <div class="subtitle">Bajirao Mastani</div>`,
            poster: "img/arijit/13.jpg"
        },
        {
            id: '14',
            songName: `Dil sambhal ja zara <br> 
            <div class="subtitle">Arijit Singh</div>`,
            poster: "img/arijit/14.jpg"
        },
        {
            id: '15',
            songName: `Raaz ankhei teri <br> 
            <div class="subtitle">Raaz</div>`,
            poster: "img/arijit/15.jpg"
        },
        {
            id: '16',
            songName: `Beche theke laabh ki bol <br> 
            <div class="subtitle">Arijit Singh </div>`,
            poster: "img/arijit/16.jpg"
        },
        {
            id: '17',
            songName: `Bojhena shey bojhena <br> 
            <div class="subtitle">Bojhena shey bojhena </div>`,
            poster: "img/arijit/17.jpg"
        },
        {
            id: '18',
            songName: `Mon majhire <br> 
            <div class="subtitle">Arijit Singh</div>`,
            poster: "img/arijit/18.jpg"
        },
        {
            id: '19',
            songName: `Tomake chhuye dilam <br> 
            <div class="subtitle">Bastu Shap</div>`,
            poster: "img/arijit/19.jpg"
        },
        {
            id: '20',
            songName: `Tor ek kothaye <br> 
            <div class="subtitle">Besh korechi prem korechi</div>`,
            poster: "img/arijit/20.jpg"
        }
    ]

    Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=> {
    
        e.getElementsByTagName('img')[0].src = songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

    })

        let masterPlay = document.getElementById('masterPlay');
        let wave = document.getElementById('wave');
        masterPlay.addEventListener('click' , () =>{
        if (music.paused || music.currentTime <= 0) {
            music.play();
            wave.classList.add('active1');
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
        } else {
            music.pause();
            wave.classList.remove('active1');
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
        }
    })


    let pop_song_left = document.getElementById('pop_song_left');

    let pop_song_right = document.getElementById('pop_song_right');

    let pop_song = document.getElementsByClassName('pop_song')[0];

    pop_song_right.addEventListener('click' , ()=> {

        pop_song.scrollLeft += 340;

    })

    pop_song_left.addEventListener('click' , ()=> {

        pop_song.scrollLeft -= 340;

    })

    let pop_art_left = document.getElementById('pop_art_left');

    let pop_art_right = document.getElementById('pop_art_right');

    let item = document.getElementsByClassName('item')[0];

    pop_art_right.addEventListener('click' , ()=> {

        item.scrollLeft += 340;

    })

    pop_art_left.addEventListener('click' , ()=> {

        item.scrollLeft -= 340;

    });

    let makeAllPlays = () => {
        Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
            el.classList.add('bi-play-circle-fill');
            el.classList.remove('bi-pause-circle-fill');
        } )
    }

    let makeAllBackground = () => {
        Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
            el.style.background = 'rgb(105, 105, 105, .0)';
        } )
    }

    let index = 0;
    let poster_master_play = document.getElementById('poster_master_play');
    let download_music = document.getElementById('download_music');
    let title = document.getElementById('title');
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
        e.addEventListener('click' , (el) => {
            index = el.target.id;
            // console.log(index);
            music.src = `audio/arijit/${index}.mp3`;
            download_music.href = `audio/arijit/${index}.mp3`;
            poster_master_play.src = `img/arijit/${index}.jpg`;
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');


            let SongTitles = songs.filter((els) =>{
                return els.id == index;
            });

            SongTitles.forEach(elss => {
                let {songName} = elss;
                title.innerHTML = songName;
                download_music.setAttribute('download' , songName);

            });

            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1');
        });
    });

        let currentStart = document.getElementById('currentStart');
        let currentEnd = document.getElementById('currentEnd');
        let seek = document.getElementById('seek');
        let bar2 = document.getElementById('bar2');
        let dot = document.getElementsByClassName('dot')[0];

    music.addEventListener('timeupdate', () =>{
        let music_curr = music.currentTime;
        let music_dur = music.duration;

        let min1 = Math.floor(music_dur / 60);
        let sec1 = Math.floor(music_dur % 60);

        if (sec1 < 10) {
            sec1 = `0${sec1}`
        }
    

        currentEnd.innerText = `${min1}:${sec1}`;
        
        let min2 = Math.floor(music_curr / 60 );
        let sec2 = Math.floor(music_curr % 60 );
        
        if (sec2 < 10) {
            sec2 = `0${sec2}`
        }

        currentStart.innerText = `${min2}:${sec2}`;

        let progressBar = parseInt((music_curr / music_dur) * 100);
        seek.value = progressBar;
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;
    });

    seek.addEventListener('change' , () => {
        music.currentTime = seek.value * music.duration / 100;

    });

    let vol_icon = document.getElementById('vol_icon');
    let vol = document.getElementById('vol');
    let vol_bar = document.getElementsByClassName('vol_bar')[0];
    let vol_dot = document.getElementById('vol_dot');

    vol.addEventListener('change' , ()=> {
        if (vol.value == 0 ) {
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.add('bi-volume-off-fill');
        }

        if (vol.value > 0 ) {
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }

        if (vol.value > 70 ) {
            vol_icon.classList.add('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }

        let vol_a = vol.value;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;
        music.volume = vol_a / 100 ;
    });

        let back = document.getElementById('back');
        let next = document.getElementById('next');

    back.addEventListener('click' , () =>{
        index -= 1;
        if (index < 1 ) {
            index = Array.from(document.getElementsByClassName('songItem')).length;
        }
        music.src = `audio/arijit/${index}.mp3`;
            poster_master_play.src = `img/arijit/${index}.jpg`;
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');


            let SongTitles = songs.filter((els) =>{
                return els.id == index;
            });

            SongTitles.forEach(elss => {
                let {songName} = elss;
                title.innerHTML = songName;

            });

            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1');
    })

    next.addEventListener('click' , () =>{
        index ++;
        
        if (index > Array.from(document.getElementsByClassName('songItem')).length) {
            index = 1;
        }
            music.src = `audio/arijit/${index}.mp3`;
            poster_master_play.src = `img/arijit/${index}.jpg`;
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');


            let SongTitles = songs.filter((els) =>{
                return els.id == index;
            });

            SongTitles.forEach(elss => {
                let {songName} = elss;
                title.innerHTML = songName;
                
            });

            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1');
    })

    let shuffle = document.getElementsByClassName('shuffle')[0];

    shuffle.addEventListener('click' , () => {
        let a = shuffle.innerHTML;

        switch (a) {
            case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat" ; 
             break;
        }
        switch (a) {
            case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random" ; 
             break;
        }
        switch (a) {
            case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "next" ; 
             break;
        }
    });


    music.addEventListener('ended' , () =>{
        let b = shuffle.innerHTML;

        switch (b){
            case "repeat":
                repeat_music(); 
            break;
            case "next":
                next_music(); 
            break;
            case "random":
                random_music(); 
            break;
        }
    });

    const next_music = () =>{
        if (index == songs.length){
            index = 1 
        } else {
            index ++;
        }
            music.src = `audio/arijit/${index}.mp3`;
            download_music.href = `audio/arijit/${index}.mp3`;
            poster_master_play.src = `img/arijit/${index}.jpg`;
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');


            let SongTitles = songs.filter((els) =>{
                return els.id == index;
            });

            SongTitles.forEach(elss => {
                let {songName} = elss;
                title.innerHTML = songName;
                download_music.setAttribute('download' , songName);

            });

            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1');
    }
    const repeat_music = () =>{
        index;
            music.src = `audio/arijit/${index}.mp3`;
            download_music.href = `audio/arijit/${index}.mp3`;
            poster_master_play.src = `img/arijit/${index}.jpg`;
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');


            let SongTitles = songs.filter((els) =>{
                return els.id == index;
            });

            SongTitles.forEach(elss => {
                let {songName} = elss;
                title.innerHTML = songName;
                download_music.setAttribute('download' , songName);

            });

            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1');
    };
    
    const random_music = () =>{
        if (index == songs.length){
            index = 1 
        } else { 
            index = Math.floor( (Math.random() * songs.length ) + 1);
        }
            music.src = `audio/arijit/${index}.mp3`;
            download_music.href = `audio/arijit/${index}.mp3`;
            poster_master_play.src = `img/arijit/${index}.jpg`;
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');


            let SongTitles = songs.filter((els) =>{
                return els.id == index;
            });

            SongTitles.forEach(elss => {
                let {songName} = elss;
                title.innerHTML = songName;
                download_music.setAttribute('download' , songName);

            });

            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1');
    };

    
    






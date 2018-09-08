import React from 'react';
import "./Album.scss";

class Album extends React.Component {
    render() {
        return (
            <li className="album">
                <div className="pic">
                    <a href="https://www.douban.com/photos/album/1659708524/">
                        <img src="https://img1.doubanio.com/view/photo/albumcover/public/p2327460628.webp" alt="doubu" />
                    </a>
                    <a href="https://www.douban.com/photos/album/1659708524/">甘南｜光芒引领。</a>
                    <span className="num">48张照片</span>
                </div>
            </li>
        );
    }
}

export default Album;

import React from 'react'
import Product from '../Product/Product'
import "./Home.css"

function Home() {
  return (
    <div className="home__container">
      <div className="home">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
        >
        </img>
        <div className="home__row">
          <Product
            id="1"
            title="The lean startup2"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={39}
            rating={4}
          />
          <Product
            id="2"
            title="Combo Sách Kỹ Năng Hay: Lấy Người Mình Yêu, Làm Điều Mình Thích "
            image="https://salt.tikicdn.com/cache/200x200/ts/product/0b/e4/c4/0c51eed555f78717b1e9feba390994d3.jpg.webp"
            price={39}
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Sách - Xé vài trang thanh xuân, đổi lấy một bản thân nỗ lực"
            image="https://salt.tikicdn.com/cache/400x400/ts/product/0f/73/50/bf9237d6e89a6982250e1e9e2cd09a68.jpg.webp"
            price={39}
            rating={3}
          />
          <Product
            id="4"
            title="Sách: 1 Ngày Bằng 48 Giờ - Sổ tay Quản Lí Thời Gian Hiệu Quả"
            image="https://salt.tikicdn.com/cache/400x400/ts/product/77/43/c6/4a6f7f0d38eb4175180d4298843e7020.jpg.webp"
            price={39}
            rating={1}
          />
          <Product
            id="5"
            title="Ho’Oopnopono: Phục Hồi Tự Nhiên, Chữa Lành Cuộc Sống, Hoàn Thiện Cuộc Đời"
            image="https://salt.tikicdn.com/cache/400x400/ts/product/a6/63/9a/d027f4c2151956b29391e0aa7710cc99.jpg.webp"
            price={39}
            rating={2}
          />

        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Nói Chuyện Là Bản Năng, Giữ Miệng Là Tu Dưỡng, Im Lặng Là Trí Tuệ"
            image="https://salt.tikicdn.com/cache/400x400/ts/product/53/ec/b6/e67dfef8643496ef9abe6e5430b1a630.jpg.webp"
            price={39}
            rating={0}
          />

        </div>

      </div>

    </div >
  )
}

export default Home
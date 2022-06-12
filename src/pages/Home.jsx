import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
        <div className="container">
            <div className="header">
                <div className="hd-text">
                    <h1>หมอหมึก</h1>
                    <p>ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ</p>
                    <a href="" className='hd-btn'>จองคิว</a>
                </div>
            </div>

            <div className="history">
                <div className="htr-text">
                    <h1>ประวัติหมอหมึก</h1>
                    <br/>
                    <p>หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ</p>
                    <br/>
                    <p>ด้วยความสามารถที่หลากหลายทำให้หมอหมึกสามารถเลือกวิธีการทำลายที่เหมาะสมกับแต่ละบุคคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด</p>
                </div>
                <div className="htr-pic">
                <img src="https://cdn.discordapp.com/attachments/985132418149253121/985132434045689896/unknown.png"/>
                </div>
            </div>
            <hr />

            <div className="review">
                <h1>รีวิวจากลูกค้า</h1>
                <div className="rv">
                    <div className="ps person1">
                        <div className="rv-profile">
                            <img src="https://media.discordapp.net/attachments/985132418149253121/985136106808958976/unknown.png"/>
                        </div>
                        <div className="rv-text">
                            <h2>แมทธิว นักธุรกิจ</h2>
                            <br />
                            <br />
                            <p>หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้ดีมากเลยตอนนี้ขายดีเทน้ำเทท่าเลยครับ</p>
                        </div>
                    </div>
                    <div className="ps person2">
                        <div className="rv-poflie">
                            <img src="https://media.discordapp.net/attachments/985132418149253121/985136179844354118/unknown.png"/>
                        </div>
                        <div className="rv-text">
                            <h2>แจ็ค นักแสดง</h2>
                            <br />
                            <br />
                            <p>ต้องขอบคุณหมอหมึกในการช่วยทำให้ความสัมพันธ์ราบรื้นด้วยนะคะทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ</p>
                        </div>
                    </div>
                    <div className="ps person3">
                        <div className="rv-profile">
                            <img src="https://media.discordapp.net/attachments/985132418149253121/985136251860574248/unknown.png"/>
                        </div>
                        <div className="rv-text">
                            <h2>แมทธิว นักธุรกิจ</h2>
                            <br />
                            <br />
                            <p>หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้ดีมากเลยตอนนี้ขายดีเทน้ำเทท่าเลยครับ</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="location">
                <div className="map">
                    <img src="https://media.discordapp.net/attachments/985132418149253121/985143709286924328/unknown.png"/>
                </div>
                <div className="lct-text">
                    <h1>ทำนายชะตากับหมอหมึก</h1>
                    <p>สามารถจองคิวได้ในเว็บหรือ</p>
                    <p>email: octopus_fortune@teller.com</p>
                    <p>โทรศัพท์: 099 XXX XXXX</p>
                    <p>และมาที่สำนักที่</p>
                    <p>ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999</p>
                    <p>ตามวันเวลาที่นัดไว้</p>
                    <br />
                    <p>จำกัดที่ 10 คิวต่อหนึ่งวัน</p>
                    <p>เปิดทำการ 10.00-18.30น. พัก 12.00-13.00</p>
                    <p>เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
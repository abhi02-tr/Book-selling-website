import { BookSearchBar } from "../components";
import img from "../images/aahat.jfif";

export default function BookList() {
    return (
        <>
            <div className="text-center m-auto text-4xl font-bold font-roboto">
                Book List
                <div className="border border-b-2 w-1/4 m-auto mt-3 border-black"></div>
            </div>
            <div className="m-4">
                <BookSearchBar />
            </div>
            <div className="">
                <div className="card w-72 bg-base-100 shadow-xl font-roboto">
                    <figure className="image-full"><img src={img} alt="Aahat" className="w-full" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">Aahat</h2>
                        <p className="">Horror</p>
                        <p className="">About book</p>
                        <p className="text-lg text-black">MRP {200} Rs.</p>
                        <div className="card-actions max-w-full">
                            <button className="btn btn-primary w-full">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
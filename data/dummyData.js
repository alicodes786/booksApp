import Book from "../model/books";
import goals from './goals.png' 

export const Books = [
    new Book(
    "a1", 
    "Al Marjan", 
    './goals', 
    "http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"),
    new Book("a2", "Al Ahli", "./goals.png", 
    "./Al Marjaan vol 2.pdf"
    ),
    new Book("a3", "Al Fitrooz", "./goals.png"),
    new Book("a4", "Al Firoz", "./goals.png")
]
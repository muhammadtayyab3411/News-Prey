import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategorySection() {
  return (
    <>
      <div className="container container-fluid" style={{ marginTop: "3rem" }}>
        <h2
          className="text-center"
          style={{ fontSize: "2.5rem", fontFamily: "'Ubuntu', sans-serif" }}
        >
          News Category
        </h2>
        <div className="container row d-flex justify-content-center">
          <CategoryItem
            imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            categoryTitle="Business"
            category="business"
          />
          <CategoryItem
            imageUrl="https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            categoryTitle="Entertainment"
            category="entertainment"
          />
          <CategoryItem
            imageUrl="https://images.unsplash.com/photo-1564356091025-26d99168c78b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            categoryTitle="General"
            category="general"
          />
          <CategoryItem
            imageUrl="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            categoryTitle="Health"
            category="health"
          />
          <CategoryItem
            imageUrl="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80"
            categoryTitle="Science"
            category="science"
          />
          <CategoryItem
            imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            categoryTitle="Sports"
            category="sports"
          />
          <CategoryItem
            imageUrl="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            categoryTitle="Technology"
            category="technology"
          />
        </div>
      </div>
    </>
  );
}

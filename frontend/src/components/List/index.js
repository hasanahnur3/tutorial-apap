import React from "react";

import Item from "components/Item";

export default function List({title, items, onItemClick}){
    return (
        <>
            <h3 style={styles.heading}>{title}</h3>
            <div className="list-group">
            {items.length == 0 ? (
          <div className="text-center">
            <h4>Belum ada item yang dipilih</h4>
            <h5>Klik salah satu item di List Movies</h5>
          </div>
        ) : null}
                {items.map((item) => (
                    <Item key={item.id} item={item} onChange={onItemClick}></Item>
                ))}
            </div>
        </>
    )
}

const styles = {
    heading: {
        fontFamily: "courier new"
    }
}
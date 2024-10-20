import { useEffect, useState } from "react";

type Wishlist = number[];

function useWishlist(): [
  Wishlist,
  (newWishlist: Wishlist | ((prevWishlist: Wishlist) => Wishlist)) => void
] {
  const wishlistKey = "wishlist";

  const [wishlist, setWishlistState] = useState<Wishlist>(() => {
    const initialWishList = typeof window !== 'undefined' && localStorage.getItem(wishlistKey);
    return initialWishList ? (JSON.parse(initialWishList) as Wishlist) : [];
  });

  useEffect(() => {
    typeof window !== 'undefined' && localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
  }, [wishlist]);

  const setWishlist = (
    newWishlist: Wishlist | ((prevWishlist: Wishlist) => Wishlist)
  ) => {
    if (typeof newWishlist == "function") {
      setWishlistState((prevWishlist) => {
        const updatedWishlist = (
          newWishlist as (prevWishlist: Wishlist) => Wishlist
        )(prevWishlist);
        return updatedWishlist;
      });
    } else {
      setWishlistState(newWishlist);
    }
  };

  return [wishlist, setWishlist];
}

export default useWishlist;

type CartItem = {
  categoryImage: CategoryImage;
  id: Id;
  name: Name;
  price: Price;
  quantity: Quantity;
};

type Category = string;

type CategoryImage = {
  desktop: string;
  mobile: string;
  tablet: string;
};

type Description = string;

type Features = string;

type Gallery = {
  first: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  second: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  third: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
};

type Id = number;

type Image = {
  desktop: string;
  mobile: string;
  tablet: string;
};

type Includes = {
  item: Item;
  quantity: Quantity;
};

type Item = string;

type Name = string;

type New = boolean;

type Others = {
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  name: string;
  slug: string;
};

type Price = number;

type Quantity = number;

type Slug = string;

type Product = {
  category: Category;
  categoryImage: CategoryImage;
  description: Description;
  features: Features;
  gallery: Gallery;
  id: Id;
  image: Image;
  includes: Includes[];
  name: Name;
  new: New;
  others: Others[];
  price: Price;
  slug: Slug;
};

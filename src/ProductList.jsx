import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "./products";
import CompanyIntro from "./CompanyIntro";
import ProductModal from "./ProductModal";

function getInitialProducts() {
  if (typeof window !== "undefined") {
    try {
      const stored = window.localStorage.getItem("ippvet_products");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (error) {
      // ignore parse errors and fallback to static products
    }
  }
  return products;
}

function ProductList() {
  const [productData, setProductData] = useState(getInitialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [query, setQuery] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [formState, setFormState] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const isEditing = formState.id !== null;

  const updateProducts = (next) => {
    setProductData(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("ippvet_products", JSON.stringify(next));
    }
  };

  const filteredProducts = productData.filter((product) => {
    const text = `${product.name} ${product.description || ""}`.toLowerCase();
    return text.includes(query.toLowerCase().trim());
  });

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const username = loginUsername.trim();
    const password = loginPassword.trim();

    if (username === "admin" && password === "ippvet123") {
      setIsAdmin(true);
      setShowLogin(false);
      setLoginError("");
      setLoginUsername("");
      setLoginPassword("");
    } else {
      setLoginError("Tài khoản hoặc mật khẩu không đúng.");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const startCreateNew = () => {
    setFormState({
      id: null,
      name: "",
      price: "",
      description: "",
      image: ""
    });
  };

  const startEditProduct = (product) => {
    setFormState({
      id: product.id,
      name: product.name || "",
      price: product.price || "",
      description: product.description || "",
      image:
        product.images && product.images.length > 0 ? product.images[0] : ""
    });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const trimmedName = formState.name.trim();
    if (!trimmedName) {
      return;
    }

    const nextProduct = {
      id: formState.id,
      name: trimmedName,
      price: formState.price.trim() || "Giá: Liên hệ",
      description: formState.description,
      images: formState.image.trim() ? [formState.image.trim()] : []
    };

    if (isEditing) {
      const updated = productData.map((product) =>
        product.id === nextProduct.id ? { ...product, ...nextProduct } : product
      );
      updateProducts(updated);
    } else {
      const nextId =
        productData.length > 0
          ? Math.max(...productData.map((p) => Number(p.id) || 0)) + 1
          : 1;
      const updated = [
        ...productData,
        {
          ...nextProduct,
          id: nextId
        }
      ];
      updateProducts(updated);
    }

    startCreateNew();
  };

  const handleDeleteProduct = (id) => {
    const confirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa sản phẩm này?"
    );
    if (!confirmed) return;

    const updated = productData.filter((product) => product.id !== id);
    updateProducts(updated);

    if (selectedProduct && selectedProduct.id === id) {
      setSelectedProduct(null);
    }

    if (formState.id === id) {
      startCreateNew();
    }
  };

  return (
    <>
      <section id="san-pham" className="product-section">
        <div className="product-section-header">
          <h2>Danh sách sản phẩm</h2>
          <p>
            Chọn nhanh thiết bị phù hợp với nhu cầu của phòng khám, bệnh viện
            hoặc phòng xét nghiệm thú y.
          </p>

          <div className="product-filters">
            <input
              type="text"
              className="product-search-input"
              placeholder="Tìm theo tên hoặc tính năng..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <div className="admin-area">
            {isAdmin ? (
              <>
                <div className="admin-header">
                  <span>Đang đăng nhập với quyền admin</span>
                  <button
                    type="button"
                    className="admin-secondary-button"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </button>
                </div>

                <form className="admin-form" onSubmit={handleFormSubmit}>
                  <div className="admin-form-row">
                    <input
                      type="text"
                      name="name"
                      className="admin-input"
                      placeholder="Tên sản phẩm"
                      value={formState.name}
                      onChange={handleFormChange}
                      required
                    />
                    <input
                      type="text"
                      name="price"
                      className="admin-input"
                      placeholder="Giá (ví dụ: Giá: Liên hệ)"
                      value={formState.price}
                      onChange={handleFormChange}
                    />
                  </div>
                  <input
                    type="text"
                    name="image"
                    className="admin-input"
                    placeholder="Đường dẫn ảnh (URL)"
                    value={formState.image}
                    onChange={handleFormChange}
                  />
                  <textarea
                    name="description"
                    className="admin-textarea"
                    placeholder="Mô tả / thông số kỹ thuật, mỗi ý trên một dòng"
                    rows={4}
                    value={formState.description}
                    onChange={handleFormChange}
                  />
                  <div className="admin-form-actions">
                    <button type="submit" className="admin-primary-button">
                      {isEditing
                        ? "Cập nhật sản phẩm"
                        : "Thêm sản phẩm mới"}
                    </button>
                    {isEditing && (
                      <button
                        type="button"
                        className="admin-secondary-button"
                        onClick={startCreateNew}
                      >
                        Hủy chỉnh sửa
                      </button>
                    )}
                  </div>
                </form>
              </>
            ) : (
              <div className="admin-login-inline">
                <button
                  type="button"
                  className="admin-secondary-button"
                  onClick={() => setShowLogin((value) => !value)}
                >
                  Đăng nhập admin
                </button>
                {showLogin && (
                  <form className="admin-login-form" onSubmit={handleLoginSubmit}>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="Tài khoản"
                      value={loginUsername}
                      onChange={(event) =>
                        setLoginUsername(event.target.value)
                      }
                    />
                    <input
                      type="password"
                      className="admin-input"
                      placeholder="Mật khẩu"
                      value={loginPassword}
                      onChange={(event) =>
                        setLoginPassword(event.target.value)
                      }
                    />
                    {loginError && (
                      <div className="admin-error-text">{loginError}</div>
                    )}
                    <button type="submit" className="admin-primary-button">
                      Đăng nhập
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDetail={() => setSelectedProduct(product)}
              isAdmin={isAdmin}
              onEdit={() => startEditProduct(product)}
              onDelete={() => handleDeleteProduct(product.id)}
            />
          ))}
          {filteredProducts.length === 0 && (
            <p className="product-empty">
              Không tìm thấy sản phẩm phù hợp. Vui lòng thử lại với từ khóa
              khác hoặc liên hệ để được tư vấn.
            </p>
          )}
        </div>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </section>

      <CompanyIntro />
    </>
  );
}

export default ProductList;


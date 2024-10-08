
// 제거할 클래스
class TrackingInformation {
    get shippingCompany() {
      return this._shippingCompany;
    }
    set shippingCompany(arg) {
      this._shippingCompany = arg;
    }
    get trackingNumber() {
      return this._trackingNumber;
    }
    set trackingNumber(arg) {
      this._trackingNumber = arg;
    }
    get display() {
      return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
  }
  

// 중심 클래스
class Shipment {
get trackingInfo() {
    return this._trackingInfo.display;
}
get trackingInformation() {
    return this._trackingInformation;
}
set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
}
}

  // 클라이언트
  aShipment.trackingInformation.shippingCompany = request.vendor;
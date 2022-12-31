import React from "react";
import "twin.macro";

export default function Overview() {
  return (
    <div tw="bg-[#2A2B31] flex flex-col justify-between max-w-[269px] min-h-[285px] rounded-[2px] px-[29px] pt-[34px] pb-[26px]">
      <div tw="flex justify-between items-center">
        <div>
          <p tw="text-[34px] leading-[40px] font-light">2,345</p>
          <p tw="text-[12px] text-[#42434b]">Transactions</p>
        </div>
        <div tw="bg-[#252529] flex flex-col text-center px-[9px] py-[12px]">
          <p tw="text-[34px] leading-[40px] font-light">5</p>
          <p>Wallets</p>
        </div>
      </div>
      <div>
        <p tw="text-[#606166] text-[12px] leading-[14px]">Current Balance</p>
        <div tw="flex ">
          <p tw="text-[48px] leading-[56px]">3.4330</p>
          <span tw="text-[#3A3C43] text-[12px]">USD</span>
        </div>
      </div>
    </div>
  );
}

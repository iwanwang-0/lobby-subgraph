import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { Claimed } from "../generated/schema"
import { Claimed as ClaimedEvent } from "../generated/Contract/Contract"
import { handleClaimed } from "../src/contract"
import { createClaimedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let questID = BigInt.fromI32(234)
    let period = BigInt.fromI32(234)
    let index = BigInt.fromI32(234)
    let amount = BigInt.fromI32(234)
    let rewardToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newClaimedEvent = createClaimedEvent(
      questID,
      period,
      index,
      amount,
      rewardToken,
      account
    )
    handleClaimed(newClaimedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Claimed created and stored", () => {
    assert.entityCount("Claimed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Claimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "questID",
      "234"
    )
    assert.fieldEquals(
      "Claimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "period",
      "234"
    )
    assert.fieldEquals(
      "Claimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "index",
      "234"
    )
    assert.fieldEquals(
      "Claimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "Claimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rewardToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Claimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

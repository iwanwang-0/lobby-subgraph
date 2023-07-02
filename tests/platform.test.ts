import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BountyClosed } from "../generated/schema"
import { BountyClosed as BountyClosedEvent } from "../generated/Platform/Platform"
import { handleBountyClosed } from "../src/platform"
import { createBountyClosedEvent } from "./platform-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let remainingReward = BigInt.fromI32(234)
    let newBountyClosedEvent = createBountyClosedEvent(id, remainingReward)
    handleBountyClosed(newBountyClosedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BountyClosed created and stored", () => {
    assert.entityCount("BountyClosed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BountyClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "remainingReward",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

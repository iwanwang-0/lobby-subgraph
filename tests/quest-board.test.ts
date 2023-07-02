import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ApprovedManager } from "../generated/schema"
import { ApprovedManager as ApprovedManagerEvent } from "../generated/QuestBoard/QuestBoard"
import { handleApprovedManager } from "../src/quest-board"
import { createApprovedManagerEvent } from "./quest-board-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let manager = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newApprovedManagerEvent = createApprovedManagerEvent(manager)
    handleApprovedManager(newApprovedManagerEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ApprovedManager created and stored", () => {
    assert.entityCount("ApprovedManager", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ApprovedManager",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "manager",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

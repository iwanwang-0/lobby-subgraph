import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  Claimed,
  NewPendingOwner,
  NewQuest,
  OwnershipTransferred,
  QuestPeriodUpdated
} from "../generated/Contract/Contract"

export function createClaimedEvent(
  questID: BigInt,
  period: BigInt,
  index: BigInt,
  amount: BigInt,
  rewardToken: Address,
  account: Address
): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("period", ethereum.Value.fromUnsignedBigInt(period))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return claimedEvent
}

export function createNewPendingOwnerEvent(
  previousPendingOwner: Address,
  newPendingOwner: Address
): NewPendingOwner {
  let newPendingOwnerEvent = changetype<NewPendingOwner>(newMockEvent())

  newPendingOwnerEvent.parameters = new Array()

  newPendingOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "previousPendingOwner",
      ethereum.Value.fromAddress(previousPendingOwner)
    )
  )
  newPendingOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingOwner",
      ethereum.Value.fromAddress(newPendingOwner)
    )
  )

  return newPendingOwnerEvent
}

export function createNewQuestEvent(
  questID: BigInt,
  rewardToken: Address
): NewQuest {
  let newQuestEvent = changetype<NewQuest>(newMockEvent())

  newQuestEvent.parameters = new Array()

  newQuestEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  newQuestEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )

  return newQuestEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createQuestPeriodUpdatedEvent(
  questID: BigInt,
  period: BigInt,
  merkleRoot: Bytes
): QuestPeriodUpdated {
  let questPeriodUpdatedEvent = changetype<QuestPeriodUpdated>(newMockEvent())

  questPeriodUpdatedEvent.parameters = new Array()

  questPeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  questPeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam("period", ethereum.Value.fromUnsignedBigInt(period))
  )
  questPeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "merkleRoot",
      ethereum.Value.fromFixedBytes(merkleRoot)
    )
  )

  return questPeriodUpdatedEvent
}

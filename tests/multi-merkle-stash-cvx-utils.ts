import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Claimed,
  MerkleRootUpdated,
  OwnershipTransferred
} from "../generated/MultiMerkleStashCVX/MultiMerkleStashCVX"

export function createClaimedEvent(
  token: Address,
  index: BigInt,
  amount: BigInt,
  account: Address,
  update: BigInt
): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("update", ethereum.Value.fromUnsignedBigInt(update))
  )

  return claimedEvent
}

export function createMerkleRootUpdatedEvent(
  token: Address,
  merkleRoot: Bytes,
  update: BigInt
): MerkleRootUpdated {
  let merkleRootUpdatedEvent = changetype<MerkleRootUpdated>(newMockEvent())

  merkleRootUpdatedEvent.parameters = new Array()

  merkleRootUpdatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  merkleRootUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "merkleRoot",
      ethereum.Value.fromFixedBytes(merkleRoot)
    )
  )
  merkleRootUpdatedEvent.parameters.push(
    new ethereum.EventParam("update", ethereum.Value.fromUnsignedBigInt(update))
  )

  return merkleRootUpdatedEvent
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

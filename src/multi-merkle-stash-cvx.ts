import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Claimed as ClaimedEvent,
  MerkleRootUpdated as MerkleRootUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/MultiMerkleStashCVX/MultiMerkleStashCVX"
import {
  Claimed,
  MerkleRootUpdated,
  OwnershipTransferred,
  ClaimedRecord
} from "../generated/schema"

export function handleClaimed(event: ClaimedEvent): void {
  const entityId = Bytes.fromUTF8("Lobby_Claim_Reward_Records");
  let entity = ClaimedRecord.load(entityId);
  if (entity == null) {
    entity = new ClaimedRecord(entityId)
  }
  entity.user = event.params.account
  entity.rewardToken = event.params.token
  entity.amount = event.params.amount
  entity.period = new BigInt(0)
  entity.platform = Bytes.fromUTF8("Votium");
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMerkleRootUpdated(event: MerkleRootUpdatedEvent): void {
  let entity = new MerkleRootUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.merkleRoot = event.params.merkleRoot
  entity.update = event.params.update

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  // entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
